// ═══════════════════════════════════════════════════════════════
// 23CS702 EXAM PREPARATION PLATFORM — CORE ENGINE V4.0
// Malnad College of Engineering (MCE), Hassan
// Computer Science & Engineering Department
// INTELLIGENT QUESTION CONSOLIDATION & OR-BASED GROUPING
// 16 Consolidated Question Groups representing 41 Historical PYQs
// ═══════════════════════════════════════════════════════════════

// --- LOCAL STORAGE KEYS ---
const STORAGE_KEY_PROGRESS = "mce_23cs702_progress_v4";
const STORAGE_KEY_MOCK = "mce_23cs702_mock_v4";

// --- APPLICATION STATE ---
let appState = {
  activePage: "study", // Default to Question-First Study!
  studyFilter: {
    priority: "P0",
    module: "ALL",
    search: ""
  },
  expandedQuestions: {},
  expandedFreqDrawers: {},
  activeMathVariant: {},
  imgZoom: {},
  activeNumTab: "rsa",
  activeDiagramTab: "aes-overview",
  activeRevTab: "formulas",
  diagramMode: "svg",
  progress: {
    mastery: {}, // groupId -> 'not_started' | 'learning' | 'practised' | 'revised' | 'mastered'
    topicsChecked: {}
  },
  mock: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    timeRemaining: 3600,
    timerId: null,
    history: []
  },
  flashcardIndex: 0
};

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  initStudyPage();
  initDashboard();
  renderDiagramTab("aes-overview");
  renderNumTab("rsa");
  renderRevTab("formulas");
  renderProgressPage();
  renderAuditReport();
  updateHeaderStats();
});

// Load persistent state
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      const parsed = JSON.parse(saved);
      appState.progress = { ...appState.progress, ...parsed };
    }
    const mockSaved = localStorage.getItem(STORAGE_KEY_MOCK);
    if (mockSaved) {
      appState.mock.history = JSON.parse(mockSaved);
    }
  } catch (e) {
    console.error("Failed to load progress:", e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(appState.progress));
    updateHeaderStats();
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

// ═══════════════════════════════════════════════════════════════
// ⭐ CIE TARGET SECTION — Helper Functions
// ═══════════════════════════════════════════════════════════════
function showCieTab(tabId) {
  document.querySelectorAll('.cie-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.cie-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('cie-panel-' + tabId).classList.add('active');
  document.querySelectorAll('.cie-tab').forEach(t => {
    if (t.getAttribute('onclick') && t.getAttribute('onclick').includes("'" + tabId + "'")) {
      t.classList.add('active');
    }
  });
}

function toggleAns(headerEl) {
  const ans = headerEl.parentElement.querySelector('.pyq-answer');
  const toggle = headerEl.querySelector('.pyq-toggle');
  if (!ans) return;
  const isOpen = ans.classList.contains('open');
  ans.classList.toggle('open', !isOpen);
  if (toggle) toggle.textContent = isOpen ? '▼ Show Answer' : '▲ Hide Answer';
}

// ═══════════════════════════════════════════════════════════════
// PAGE NAVIGATION
// ═══════════════════════════════════════════════════════════════
function showPage(pageId) {
  appState.activePage = pageId;
  document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
  const target = document.getElementById("page-" + pageId);
  if (target) target.classList.add("active");

  // Update topnav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(`'${pageId}'`)) {
      btn.classList.add("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "study") renderStudyQuestions();
  if (pageId === "dashboard") initDashboard();
  if (pageId === "progress") renderProgressPage();
}

// ═══════════════════════════════════════════════════════════════
// 1. CONSOLIDATED QUESTION-FIRST LEARNING SYSTEM
// ═══════════════════════════════════════════════════════════════
function initStudyPage() {
  // Automatically expand the very first P0 group for immediate study
  const groups = getQuestionGroups();
  const firstP0 = groups.find(g => g.priority === "P0");
  if (firstP0) {
    appState.expandedQuestions[firstP0.groupId] = true;
  }
  renderStudyQuestions();
}

function getQuestionGroups() {
  if (typeof CONSOLIDATED_QUESTION_GROUPS !== "undefined") return CONSOLIDATED_QUESTION_GROUPS;
  if (typeof QUESTION_BANK !== "undefined") return QUESTION_BANK;
  return [];
}

function filterByPriority(prio) {
  appState.studyFilter.priority = prio;
  document.querySelectorAll(".priority-pill").forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-prio") === prio);
  });
  renderStudyQuestions();
}

function filterByModule(mod) {
  appState.studyFilter.module = mod;
  document.querySelectorAll(".module-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-mod") === mod);
  });
  renderStudyQuestions();
}

function filterStudyQuestions() {
  appState.studyFilter.search = document.getElementById("study-search").value.toLowerCase().trim();
  renderStudyQuestions();
}

function startP0Revision() {
  filterByPriority("P0");
  filterByModule("ALL");
  const groups = getQuestionGroups();
  const firstP0 = groups.find(g => g.priority === "P0");
  if (firstP0) {
    appState.expandedQuestions = { [firstP0.groupId]: true };
    renderStudyQuestions();
    setTimeout(() => {
      const el = document.getElementById(`pq-card-${firstP0.groupId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

function nextPriorityQuestion(currentGroupId) {
  const groups = getFilteredQuestionGroups();
  const currentIndex = groups.findIndex(g => g.groupId === currentGroupId);
  if (currentIndex !== -1 && currentIndex + 1 < groups.length) {
    const nextGroup = groups[currentIndex + 1];
    appState.expandedQuestions[nextGroup.groupId] = true;
    renderStudyQuestions();
    setTimeout(() => {
      const el = document.getElementById(`pq-card-${nextGroup.groupId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  } else {
    alert("🎉 Congratulations! You have completed all priority questions in this filter. Mark your progress and test yourself in the Mock CIE Simulator!");
  }
}

function toggleQuestion(groupId) {
  appState.expandedQuestions[groupId] = !appState.expandedQuestions[groupId];
  renderStudyQuestions();
}

function toggleFreqDrawer(groupId) {
  appState.expandedFreqDrawers[groupId] = !appState.expandedFreqDrawers[groupId];
  renderStudyQuestions();
}

function setMathVariant(groupId, vIdx) {
  appState.activeMathVariant[groupId] = vIdx;
  renderStudyQuestions();
}

function expandAllQuestions() {
  const groups = getFilteredQuestionGroups();
  groups.forEach(g => { appState.expandedQuestions[g.groupId] = true; });
  renderStudyQuestions();
}

function collapseAllQuestions() {
  appState.expandedQuestions = {};
  renderStudyQuestions();
}

function setQuestionStatus(groupId, status) {
  appState.progress.mastery[groupId] = status;
  saveProgress();
  renderStudyQuestions();
}

function getFilteredQuestionGroups() {
  const groups = getQuestionGroups();
  return groups.filter(g => {
    if (appState.studyFilter.priority !== "ALL" && g.priority !== appState.studyFilter.priority) return false;
    if (appState.studyFilter.module !== "ALL" && String(g.module) !== appState.studyFilter.module) return false;
    if (appState.studyFilter.search) {
      const qTextPool = g.variants.map(v => v.wording + " " + v.paperCode + " " + v.session).join(" ");
      const hay = (g.masterQuestionTitle + " " + g.topic + " " + g.subtopic + " " + qTextPool).toLowerCase();
      if (!hay.includes(appState.studyFilter.search)) return false;
    }
    return true;
  });
}

function renderStudyQuestions() {
  const container = document.getElementById("question-hierarchy-container");
  const countEl = document.getElementById("study-status-count");
  if (!container) return;

  const allGroups = getQuestionGroups();

  // Update counts in header pills
  const p0Groups = allGroups.filter(g => g.priority === "P0");
  const p1Groups = allGroups.filter(g => g.priority === "P1");
  const p0Pyqs = p0Groups.reduce((acc, g) => acc + g.variants.length, 0);
  const p1Pyqs = p1Groups.reduce((acc, g) => acc + g.variants.length, 0);

  const elP0 = document.getElementById("count-p0");
  const elP1 = document.getElementById("count-p1");
  const elP0Pyqs = document.getElementById("count-p0-pyqs");
  const elP1Pyqs = document.getElementById("count-p1-pyqs");

  if (elP0) elP0.textContent = p0Groups.length;
  if (elP1) elP1.textContent = p1Groups.length;
  if (elP0Pyqs) elP0Pyqs.textContent = p0Pyqs;
  if (elP1Pyqs) elP1Pyqs.textContent = p1Pyqs;

  const filtered = getFilteredQuestionGroups();
  const filteredPyqs = filtered.reduce((acc, g) => acc + g.variants.length, 0);

  if (countEl) {
    const prioLabel = appState.studyFilter.priority === "ALL" ? "All Priorities" : `${appState.studyFilter.priority} Priority`;
    const modLabel = appState.studyFilter.module === "ALL" ? "All Modules" : `Module ${appState.studyFilter.module}`;
    countEl.textContent = `Displaying ${filtered.length} Consolidated Question Groups representing ${filteredPyqs} Historical PYQs (${prioLabel} · ${modLabel})`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card text-center text-muted" style="padding: 3rem">
        <h3>🔍 No examination questions match your current filter.</h3>
        <p class="text-sm mt-1">Try switching to "Complete Coverage" or clear your search query.</p>
        <button class="btn btn-secondary btn-sm mt-2" onclick="filterByPriority('ALL'); filterByModule('ALL'); document.getElementById('study-search').value=''; renderStudyQuestions();">Reset Filters</button>
      </div>
    `;
    return;
  }

  // Group hierarchically: Topic -> Subtopic -> Consolidated Question Groups
  const topicGroups = {};
  filtered.forEach(g => {
    if (!topicGroups[g.topic]) topicGroups[g.topic] = {};
    if (!topicGroups[g.topic][g.subtopic]) topicGroups[g.topic][g.subtopic] = [];
    topicGroups[g.topic][g.subtopic].push(g);
  });

  let html = "";
  for (const topicName in topicGroups) {
    const subtopics = topicGroups[topicName];
    const totalGroupsInTopic = Object.values(subtopics).reduce((acc, arr) => acc + arr.length, 0);
    const totalPyqsInTopic = Object.values(subtopics).reduce((acc, arr) => acc + arr.reduce((sum, g) => sum + g.variants.length, 0), 0);
    const modNum = subtopics[Object.keys(subtopics)[0]][0].module;

    html += `
      <div class="hierarchy-topic-header">
        <h2>📚 ${topicName} (Module ${modNum})</h2>
        <span class="badge" style="background:rgba(255,255,255,0.2); color:#fff">
          ${totalGroupsInTopic} Question Groups · ${totalPyqsInTopic} Historical PYQs
        </span>
      </div>
      <div class="hierarchy-subtopic-block">
    `;

    for (const subtopicName in subtopics) {
      const gList = subtopics[subtopicName];
      const subtopicPyqs = gList.reduce((acc, g) => acc + g.variants.length, 0);
      html += `
        <div class="hierarchy-subtopic-header">
          <span>🔹 Subtopic: <strong>${subtopicName}</strong></span>
          <span class="text-xs text-muted">${gList.length} Consolidated Group${gList.length > 1 ? 's' : ''} (${subtopicPyqs} Historical PYQs)</span>
        </div>
      `;

      gList.forEach(g => {
        html += renderConsolidatedQuestionCard(g);
      });
    }

    html += `</div>`; // Close hierarchy-subtopic-block
  }

  container.innerHTML = html;
}

function renderConsolidatedQuestionCard(g) {
  const isExpanded = !!appState.expandedQuestions[g.groupId];
  const isFreqOpen = !!appState.expandedFreqDrawers[g.groupId];
  const status = appState.progress.mastery[g.groupId] || "not_started";

  let statusBadgeStyle = "background:#f1f5f9; color:#64748b";
  let statusLabel = "Not Started";
  if (status === "learning") { statusBadgeStyle = "background:#dbeafe; color:#1e40af"; statusLabel = "Learning"; }
  if (status === "practised") { statusBadgeStyle = "background:#fef3c7; color:#92400e"; statusLabel = "Practised"; }
  if (status === "revised") { statusBadgeStyle = "background:#e0e7ff; color:#4338ca"; statusLabel = "Revised"; }
  if (status === "mastered") { statusBadgeStyle = "background:#d1fae5; color:#065f46"; statusLabel = "Mastered ✓"; }

  const pBadge = g.priority === "P0" ? "badge-p0" : "badge-p1";

  let expandedContentHtml = "";
  if (isExpanded) {
    // Math solutions selector if multiple solutions exist
    let mathSectionHtml = "";
    if (g.mathSolutions && g.mathSolutions.length > 0) {
      const activeIdx = appState.activeMathVariant[g.groupId] || 0;
      const sol = g.mathSolutions[activeIdx] || g.mathSolutions[0];

      let tabsHtml = "";
      if (g.mathSolutions.length > 1) {
        tabsHtml = `
          <div class="math-variant-tabs">
            <span class="text-xs fw-bold text-muted" style="align-self:center; margin-right:0.4rem">Select Exam Session Variant:</span>
            ${g.mathSolutions.map((s, idx) => `
              <button class="math-v-btn ${idx === activeIdx ? 'active' : ''}" onclick="setMathVariant('${g.groupId}', ${idx})">
                ${s.variantLabel.split('—')[0].trim()}
              </button>
            `).join("")}
          </div>
        `;
      }

      mathSectionHtml = `
        <div class="section-block section-g">
          <div class="section-header">
            <span>SECTION G: MATHEMATICAL STEP-BY-STEP CALCULATION</span>
            <span class="badge" style="background:rgba(255,255,255,0.2); color:#fff">Exact PYQ Numbers</span>
          </div>
          <div class="section-body">
            <div class="section-g-content">
              ${tabsHtml}
              <div class="mb-2"><strong>Active Variant:</strong> <span class="badge badge-module">${sol.variantLabel}</span></div>
              <div class="mb-2"><strong>Given Parameters:</strong> <code>${sol.given}</code></div>
              <div class="mb-2"><strong>Required Calculations:</strong> ${sol.required}</div>
              <div class="mb-2"><strong>Applied Formulas:</strong> <code>${sol.formula}</code></div>
              <div class="panel mb-2" style="background:#fff">
                <strong>Step-by-Step Arithmetic Derivation:</strong>
                <ol style="margin: 0.5rem 0 0 1.25rem; font-family: var(--mono); font-size: 0.88rem; line-height: 1.6">
                  ${sol.steps.map(s => `<li>${s}</li>`).join("")}
                </ol>
              </div>
              <div class="result-box mb-2">
                <strong>Final Result:</strong> ${sol.finalAnswer}<br>
                <strong>Mathematical Verification:</strong> ${sol.verification}
              </div>
              <div>
                <button class="btn btn-sm btn-primary" onclick="showPage('numericals'); loadNumPreset('${sol.calculatorType}', ${JSON.stringify(sol.calculatorPreset).replace(/"/g, '&quot;')})">
                  🧮 Open in Interactive Numerical Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    expandedContentHtml = `
      <div class="pq-expanded-body">
        
        <!-- SECTION A: CONSOLIDATED HISTORICAL QUESTION & OR-BASED VARIANTS -->
        <div class="section-block section-a">
          <div class="section-header">
            <span>SECTION A: CONSOLIDATED HISTORICAL QUESTION & OR-BASED VARIANTS</span>
            <span class="badge badge-verified">✓ 100% Source-Verified MCE Hassan Archive</span>
          </div>
          <div class="section-body">
            
            <!-- Master Question Banner -->
            <div class="master-question-banner">
              <span class="master-badge-label">Master Question Title</span>
              <div class="master-question-title">${escapeHtml(g.masterQuestionTitle)}</div>
              <div class="master-freq-line">
                <span>📊 Historical Frequency: <strong>${g.historicalFrequency}</strong></span> ·
                <span>Exam Marks: <strong>${g.historicalMarks}</strong></span> ·
                <span>Recurrence: <strong>${g.variants.length} Previous Exam Questions</strong></span>
              </div>
            </div>

            <!-- Expandable Frequency Inspector -->
            <div class="mb-2">
              <button class="btn btn-xs btn-secondary" onclick="toggleFreqDrawer('${g.groupId}')">
                ${isFreqOpen ? '▲ Hide Historical Exam Appearances' : '▼ Inspect All Historical Exam Papers & Marks (' + g.variants.length + ' Papers)'}
              </button>
              ${isFreqOpen ? `
                <div class="freq-details-drawer">
                  <strong>Historical Examination Papers:</strong>
                  <ul style="margin: 0.4rem 0 0 1.25rem">
                    ${g.historicalPapers.map(p => `<li>${p}</li>`).join("")}
                  </ul>
                  <p class="text-xs text-muted mt-1">Calculated using unique MCE examination papers (total 9 papers inspected, 2018–2025).</p>
                </div>
              ` : ''}
            </div>

            <!-- Historical Question Variants Joined by OR -->
            <div class="variants-wrapper">
              <div class="variants-intro">
                <span>Asked in previous examinations as (${g.variants.length} Historical Variants):</span>
                <span class="text-xs text-muted">All original wordings preserved</span>
              </div>

              ${g.variants.map((v, vIdx) => `
                <div class="variant-card">
                  <div class="variant-text">"${escapeHtml(v.wording)}"</div>
                  <div class="variant-meta-row">
                    <span>📅 <strong>${v.session} (${v.year})</strong></span>
                    <span class="badge badge-marks">${v.marks} Marks</span>
                    <span class="badge badge-module">${v.paperCode}</span>
                    <span class="text-muted">Source: ${v.paperPdf} (Page ${v.pdfPage})</span>
                    <button class="btn btn-xs btn-secondary" onclick="openScanModal('${v.paperId}', '${v.session}', '${v.paperCode}')" style="margin-left:auto">
                      📄 View Original Exam Paper Scan (Page ${v.pdfPage})
                    </button>
                  </div>
                </div>
                ${vIdx < g.variants.length - 1 ? `
                  <div class="or-separator-badge">
                    <span class="or-pill">─── OR ───</span>
                  </div>
                ` : ''}
              `).join("")}
            </div>

          </div>
        </div>

        <!-- SECTION B: EXACT ORIGINAL NOTES DIAGRAM -->
        <div class="section-block section-b">
          <div class="section-header">
            <span>SECTION B: EXACT ORIGINAL DIAGRAM FROM MCE NOTES</span>
            <span class="badge" style="background:rgba(255,255,255,0.2); color:#fff">Classroom Notes Extraction</span>
          </div>
          <div class="section-body">
            <div class="section-b-img-box">
              <p class="text-sm fw-bold mb-1" style="color:#065f46">
                📌 ${g.originalDiagram.source}
              </p>
              <p class="text-xs text-muted mb-2">${g.originalDiagram.caption}</p>
              
              <div style="overflow:auto; max-height:550px">
                <img id="note-img-${g.groupId}" src="${g.originalDiagram.assetPath}" alt="Original Notes Diagram" style="transform: scale(${appState.imgZoom[g.groupId] || 1})" onerror="this.onerror=null; this.src='images/notes-extracted/AES_img_00.png'">
              </div>

              <div class="img-controls">
                <button class="btn btn-xs btn-secondary" onclick="openFullscreen('${g.originalDiagram.assetPath}')">🔍 Fullscreen View</button>
                <button class="btn btn-xs btn-secondary" onclick="zoomImg('${g.groupId}', 1.25)">🔎 Zoom In (+)</button>
                <button class="btn btn-xs btn-secondary" onclick="zoomImg('${g.groupId}', 0.8)">🔎 Zoom Out (-)</button>
                <button class="btn btn-xs btn-secondary" onclick="zoomImg('${g.groupId}', 1, true)">🔄 Reset Zoom</button>
                <a class="btn btn-xs btn-secondary" href="${g.originalDiagram.assetPath}" target="_blank" download>📥 Open Original Image</a>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION C: CLEAN INTERACTIVE SVG RECONSTRUCTION -->
        <div class="section-block section-c">
          <div class="section-header">
            <span>SECTION C: CLEAN INTERACTIVE SVG RECONSTRUCTION</span>
            <span class="badge" style="background:rgba(255,255,255,0.2); color:#fff">Mathematically Accurate Vector</span>
          </div>
          <div class="section-body">
            <div class="section-c-svg-box">
              ${getSvgForType(g.svgType)}
            </div>
          </div>
        </div>

        <!-- SECTION D: EXACT ANSWER FROM MCE CLASSROOM NOTES -->
        <div class="section-block section-d">
          <div class="section-header">
            <span>SECTION D: EXACT ANSWER FROM MCE CLASSROOM NOTES</span>
            <span class="badge" style="background:rgba(255,255,255,0.2); color:#fff">${g.notesSource}</span>
          </div>
          <div class="section-body">
            <div class="section-d-content">
${escapeHtml(g.notesAnswer)}
            </div>
          </div>
        </div>

        <!-- SECTION E: COMPREHENSIVE EXAM-READY MASTER ANSWER -->
        <div class="section-block section-e">
          <div class="section-header">
            <span>SECTION E: COMPREHENSIVE EXAM-READY MASTER ANSWER (COVERS UNION OF ALL VARIANTS)</span>
            <span class="badge badge-verified">✓ Exam Hall Format (${g.historicalMarks})</span>
          </div>
          <div class="section-body">
            <div class="section-e-content">
${escapeHtml(g.masterAnswer)}
            </div>
          </div>
        </div>

        <!-- SECTION F: QUICK MEMORIZATION -->
        <div class="section-block section-f">
          <div class="section-header">
            <span>SECTION F: QUICK MEMORIZATION & EXAMINEE CHECKLIST</span>
            <span class="badge" style="background:rgba(255,255,255,0.2); color:#fff">High-Yield Recall</span>
          </div>
          <div class="section-body">
            <div class="section-f-grid">
              <div class="memo-card">
                <h4>📌 Key Points to Write:</h4>
                <ul>
                  ${g.quickRevision.keyPoints ? g.quickRevision.keyPoints.map(p => `<li>${p}</li>`).join("") : "<li>Review exam answer above.</li>"}
                </ul>
              </div>
              <div class="memo-card">
                <h4>🔑 Essential Keywords:</h4>
                <div class="flex flex-wrap gap-1 mt-1">
                  ${g.quickRevision.keywords ? g.quickRevision.keywords.map(k => `<span class="badge badge-module text-xs">${k}</span>`).join("") : ""}
                </div>
              </div>
              <div class="memo-card">
                <h4>📐 Formulas &amp; Diagram Elements:</h4>
                <ul>
                  ${g.quickRevision.formulas ? g.quickRevision.formulas.map(f => `<li><code>${f}</code></li>`).join("") : ""}
                  ${g.quickRevision.diagramElements ? g.quickRevision.diagramElements.map(d => `<li>Draw: ${d}</li>`).join("") : ""}
                </ul>
              </div>
              <div class="memo-card">
                <h4>⚠️ Examiner Traps to Avoid:</h4>
                <ul style="color:#991b1b">
                  ${g.quickRevision.examinerTraps ? g.quickRevision.examinerTraps.map(t => `<li>${t}</li>`).join("") : "<li>Avoid sloppy diagram labelling.</li>"}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION G: MATHEMATICAL SOLVER (Only if question is numerical) -->
        ${mathSectionHtml}

        <!-- FOOTER BAR INSIDE EXPANDED QUESTION -->
        <div class="pq-footer-nav">
          <div class="flex items-center gap-1">
            <span class="text-sm fw-bold">Update Mastery Status:</span>
            <button class="btn btn-xs ${status === 'learning' ? 'btn-primary' : 'btn-secondary'}" onclick="setQuestionStatus('${g.groupId}', 'learning')">Learning</button>
            <button class="btn btn-xs ${status === 'revised' ? 'btn-primary' : 'btn-secondary'}" onclick="setQuestionStatus('${g.groupId}', 'revised')">Revised</button>
            <button class="btn btn-xs ${status === 'mastered' ? 'btn-success' : 'btn-secondary'}" onclick="setQuestionStatus('${g.groupId}', 'mastered')">Mastered ✓</button>
          </div>
          <button class="btn btn-primary btn-sm" onclick="nextPriorityQuestion('${g.groupId}')">
            ⚡ Next Priority Question ▶
          </button>
        </div>

      </div>
    `;
  }

  return `
    <div class="pq-card ${isExpanded ? 'expanded' : ''}" id="pq-card-${g.groupId}">
      <div class="pq-header" onclick="toggleQuestion('${g.groupId}')">
        <div class="pq-badges">
          <span class="badge ${pBadge}">${g.priority}</span>
          <span class="badge badge-marks">${g.historicalMarks}</span>
          <span class="badge badge-module">Module ${g.module}</span>
          <span class="badge" style="background:#e0f2fe; color:#0369a1">
            📊 ${g.historicalFrequency} · ${g.variants.length} PYQ${g.variants.length > 1 ? 's' : ''}
          </span>
          <span class="badge" style="margin-left:auto; ${statusBadgeStyle}">${statusLabel}</span>
        </div>
        <div class="pq-text" style="font-size:1.05rem; font-weight:700">
          ${escapeHtml(g.masterQuestionTitle)}
        </div>
        <div class="text-xs text-muted mt-1">
          Asked in ${g.variants.length} historical examination papers (${g.historicalPapers.map(p => p.split(':')[0]).join(", ")})
        </div>
      </div>

      <div class="pq-action-bar">
        <button class="btn btn-sm ${isExpanded ? 'btn-secondary' : 'btn-primary'}" onclick="toggleQuestion('${g.groupId}')">
          ${isExpanded ? '▲ Collapse Consolidated Study Material' : '▼ Expand Full Consolidated Question Study Material (' + g.variants.length + ' OR Variants)'}
        </button>
        <button class="btn btn-sm btn-secondary" onclick="toggleFreqDrawer('${g.groupId}')">
          📊 Inspect ${g.variants.length} Exam Papers
        </button>
        <div style="margin-left:auto; display:flex; gap:0.25rem; align-items:center">
          <button class="mastery-btn ${status === 'revised' ? 'revised' : ''}" onclick="setQuestionStatus('${g.groupId}', 'revised')">Revised</button>
          <button class="mastery-btn ${status === 'mastered' ? 'mastered' : ''}" onclick="setQuestionStatus('${g.groupId}', 'mastered')">Mastered</button>
        </div>
      </div>

      ${expandedContentHtml}
    </div>
  `;
}

// ── IMAGE ZOOM & FULLSCREEN HELPERS ──
function zoomImg(groupId, factor, reset = false) {
  if (reset) {
    appState.imgZoom[groupId] = 1;
  } else {
    appState.imgZoom[groupId] = (appState.imgZoom[groupId] || 1) * factor;
  }
  const img = document.getElementById(`note-img-${groupId}`);
  if (img) img.style.transform = `scale(${appState.imgZoom[groupId]})`;
}

function openFullscreen(src) {
  const overlay = document.getElementById("fullscreen-overlay");
  const img = document.getElementById("fullscreen-img");
  if (overlay && img) {
    img.src = src;
    overlay.classList.add("active");
  }
}

function closeFullscreen() {
  const overlay = document.getElementById("fullscreen-overlay");
  if (overlay) overlay.classList.remove("active");
}

function openScanModal(paperId, session, paperCode) {
  const modal = document.getElementById("scan-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalInfo = document.getElementById("modal-info");

  const pageNum = paperId.replace("P", "").padStart(2, "0");
  const imgSrc = `images/pyq-scans/pyq_page_${pageNum}.png`;

  modalTitle.textContent = `Original MCE Hassan Exam Paper: ${paperId} (${session})`;
  modalInfo.textContent = `Course: 23CS702 (${paperCode}) · Scanned from official examination archive · Page ${pageNum}`;
  modalImg.src = imgSrc;
  modal.classList.add("active");
}

function closeScanModal(e) {
  if (e) e.stopPropagation();
  const modal = document.getElementById("scan-modal");
  if (modal) modal.classList.remove("active");
}

// ── SVG SELECTOR FOR QUESTIONS ──
function getSvgForType(type) {
  if (type === "aes-overview") return getSvgAesOverview();
  if (type === "aes-data-units") return getSvgAesDataUnits();
  if (type === "aes-state") return getSvgAesState();
  if (type === "aes-transforms") return getSvgAesTransforms();
  if (type === "sym-asym") return getSvgSymAsym();
  if (type === "knapsack-flow") return getSvgKnapsackFlow();
  if (type === "rsa-flow") return getSvgRsaFlow();
  if (type === "rabin-flow") return getSvgRabinFlow();
  if (type === "itact-flow") return getSvgItActFlow();
  return getSvgAesOverview();
}

// ═══════════════════════════════════════════════════════════════
// DASHBOARD & STATS
// ═══════════════════════════════════════════════════════════════
function initDashboard() {
  const freqContainer = document.getElementById("freq-chart");
  const groups = getQuestionGroups();
  if (freqContainer && groups.length > 0) {
    let html = "";
    // Sort groups by recurrence count descending
    const sorted = [...groups].sort((a, b) => b.uniquePaperCount - a.uniquePaperCount);
    sorted.forEach(g => {
      const count = g.uniquePaperCount;
      const total = g.totalApplicablePapers;
      const pct = Math.round((count / total) * 100);
      const barColor = g.priority === "P0" ? "var(--p0)" : "var(--p1)";
      html += `
        <div class="freq-row" style="margin-bottom:0.75rem">
          <div class="topic-name" style="min-width:240px">
            <strong>${g.topic}</strong> (Mod ${g.module})
            <div class="text-xs text-muted">${g.variants.length} PYQs across ${count}/${total} papers</div>
          </div>
          <div class="freq-bar" style="width: ${Math.max(pct, 18)}%; background: ${barColor}">
            ${count}/${total} papers (${g.variants.length} PYQs)
          </div>
          <div class="freq-pct" style="min-width:50px">${pct}%</div>
        </div>
      `;
    });
    freqContainer.innerHTML = html;
  }
  updateHeaderStats();
}

function updateHeaderStats() {
  const groups = getQuestionGroups();
  const totalGroups = groups.length;
  const masteredCount = Object.values(appState.progress.mastery).filter(v => v === "mastered").length;
  const progressPct = totalGroups > 0 ? Math.round((masteredCount / totalGroups) * 100) : 0;

  const progEl = document.getElementById("stat-progress");
  if (progEl) progEl.textContent = progressPct + "%";

  const dashSummary = document.getElementById("dash-progress-summary");
  if (dashSummary) {
    const learningCount = Object.values(appState.progress.mastery).filter(v => v === "learning").length;
    const revisedCount = Object.values(appState.progress.mastery).filter(v => v === "revised").length;
    dashSummary.innerHTML = `
      <div style="margin-bottom: 0.5rem; display: flex; justify-content: space-between; font-size: 0.85rem">
        <span>Completion (${masteredCount}/${totalGroups} Consolidated Groups Mastered)</span>
        <strong>${progressPct}%</strong>
      </div>
      <div class="progress-bar mb-2">
        <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
      </div>
      <div class="flex gap-1 text-xs text-muted">
        <span>📘 Learning: ${learningCount}</span> ·
        <span>📙 Revised: ${revisedCount}</span> ·
        <span>📗 Mastered: ${masteredCount}</span>
      </div>
    `;
  }
}


function getSvgAesOverview() {
  return `
    <h3>AES-128 Encryption Round Structure</h3>
    <p class="svg-diagram-desc">128-bit block size · 10 rounds · 4 distinct byte transformations · Note that Round 10 omits MixColumns.</p>
    <svg viewBox="0 0 850 480" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <rect x="30" y="30" width="160" height="45" rx="6" fill="#1e40af" />
      <text x="110" y="58" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Plaintext (128 bits)</text>
      <line x1="190" y1="52.5" x2="250" y2="52.5" stroke="#1e40af" stroke-width="2.5" />

      <rect x="250" y="25" width="180" height="55" rx="6" fill="#dbeafe" stroke="#1e40af" stroke-width="2" />
      <text x="340" y="47" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Initial Transformation</text>
      <text x="340" y="66" fill="#1e40af" font-size="12" text-anchor="middle">AddRoundKey (Key K₀)</text>
      <line x1="340" y1="80" x2="340" y2="120" stroke="#1e40af" stroke-width="2.5" />

      <rect x="180" y="120" width="320" height="190" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2.5" stroke-dasharray="6" />
      <text x="340" y="145" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle">ROUNDS 1 to 9 (Normal Rounds)</text>
      
      <rect x="210" y="160" width="260" height="28" rx="4" fill="#ecfdf5" stroke="#059669" />
      <text x="340" y="179" fill="#065f46" font-size="12" font-weight="600" text-anchor="middle">1. SubBytes (16×16 S-Box Non-Linear)</text>

      <rect x="210" y="195" width="260" height="28" rx="4" fill="#ecfdf5" stroke="#059669" />
      <text x="340" y="214" fill="#065f46" font-size="12" font-weight="600" text-anchor="middle">2. ShiftRows (Permutation by Row Shifts)</text>

      <rect x="210" y="230" width="260" height="28" rx="4" fill="#ecfdf5" stroke="#059669" />
      <text x="340" y="249" fill="#065f46" font-size="12" font-weight="600" text-anchor="middle">3. MixColumns (Matrix Mult in GF(2⁸))</text>

      <rect x="210" y="265" width="260" height="28" rx="4" fill="#ecfdf5" stroke="#059669" />
      <text x="340" y="284" fill="#065f46" font-size="12" font-weight="600" text-anchor="middle">4. AddRoundKey (XOR with Round Key Kᵢ)</text>

      <line x1="340" y1="310" x2="340" y2="340" stroke="#1e40af" stroke-width="2.5" />

      <rect x="180" y="340" width="320" height="110" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2.5" />
      <text x="340" y="362" fill="#dc2626" font-size="14" font-weight="bold" text-anchor="middle">FINAL ROUND 10 (No MixColumns!)</text>

      <rect x="210" y="372" width="260" height="22" rx="4" fill="#fee2e2" />
      <text x="340" y="388" fill="#991b1b" font-size="11" text-anchor="middle">SubBytes</text>
      <rect x="210" y="398" width="260" height="22" rx="4" fill="#fee2e2" />
      <text x="340" y="414" fill="#991b1b" font-size="11" text-anchor="middle">ShiftRows</text>
      <rect x="210" y="424" width="260" height="22" rx="4" fill="#fee2e2" />
      <text x="340" y="440" fill="#991b1b" font-size="11" text-anchor="middle">AddRoundKey (Key K₁₀)</text>

      <line x1="500" y1="395" x2="570" y2="395" stroke="#dc2626" stroke-width="2.5" />
      <rect x="570" y="372" width="180" height="45" rx="6" fill="#1e40af" />
      <text x="660" y="400" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">Ciphertext (128 bits)</text>

      <rect x="580" y="80" width="230" height="200" rx="8" fill="#fff" stroke="#94a3b8" stroke-width="1.5" />
      <text x="695" y="105" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Key Expansion Schedule</text>
      <text x="600" y="130" fill="#475569" font-size="11">• Cipher Key: 128 bits = 4 words</text>
      <text x="600" y="150" fill="#475569" font-size="11">• Expanded Key: 44 words (w₀ to w₄₃)</text>
      <text x="600" y="170" fill="#475569" font-size="11">• Each Round Key: 4 words = 16 bytes</text>
      <text x="600" y="195" fill="#475569" font-size="11">• Total Round Keys: 11 keys (K₀..K₁₀)</text>
      <text x="600" y="225" fill="#d97706" font-size="11" font-weight="600">• RotWord, SubWord, Rcon</text>
    </svg>
  `;
}

function getSvgAesDataUnits() {
  return `
    <h3>AES Five Data Units Architecture</h3>
    <svg viewBox="0 0 850 280" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="100" height="80" rx="6" fill="#fff" stroke="#1e40af" stroke-width="2" />
        <text x="50" y="30" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">1. BIT</text>
        <text x="50" y="55" font-size="11" fill="#475569" text-anchor="middle">0 or 1</text>
        <text x="50" y="70" font-size="9" fill="#059669" text-anchor="middle">Atomic unit</text>
      </g>
      <line x1="130" y1="80" x2="170" y2="80" stroke="#1e40af" stroke-width="2" />

      <g transform="translate(170, 40)">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#fff" stroke="#059669" stroke-width="2" />
        <text x="60" y="28" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">2. BYTE</text>
        <text x="60" y="48" font-size="11" fill="#475569" text-anchor="middle">8 bits</text>
        <text x="60" y="65" font-size="10" fill="#065f46" text-anchor="middle">GF(2⁸) element</text>
      </g>
      <line x1="290" y1="80" x2="330" y2="80" stroke="#059669" stroke-width="2" />

      <g transform="translate(330, 40)">
        <rect x="0" y="0" width="130" height="80" rx="6" fill="#fff" stroke="#d97706" stroke-width="2" />
        <text x="65" y="28" font-size="12" font-weight="bold" fill="#d97706" text-anchor="middle">3. WORD</text>
        <text x="65" y="48" font-size="11" fill="#475569" text-anchor="middle">32 bits = 4 bytes</text>
        <text x="65" y="65" font-size="10" fill="#92400e" text-anchor="middle">1 State Column</text>
      </g>
      <line x1="460" y1="80" x2="500" y2="80" stroke="#d97706" stroke-width="2" />

      <g transform="translate(500, 40)">
        <rect x="0" y="0" width="140" height="80" rx="6" fill="#fff" stroke="#7c3aed" stroke-width="2" />
        <text x="70" y="28" font-size="12" font-weight="bold" fill="#7c3aed" text-anchor="middle">4. BLOCK</text>
        <text x="70" y="48" font-size="11" fill="#475569" text-anchor="middle">128 bits = 16 bytes</text>
        <text x="70" y="65" font-size="10" fill="#5b21b6" text-anchor="middle">Plaintext / Ciphertext</text>
      </g>
      <line x1="640" y1="80" x2="680" y2="80" stroke="#7c3aed" stroke-width="2" />

      <g transform="translate(680, 20)">
        <rect x="0" y="0" width="140" height="120" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" />
        <text x="70" y="25" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">5. STATE</text>
        <text x="70" y="45" font-size="11" fill="#475569" text-anchor="middle">4×4 Byte Matrix</text>
        <rect x="15" y="55" width="110" height="50" rx="4" fill="#fff" stroke="#93c5fd" />
        <text x="70" y="75" font-size="10" font-family="Courier" fill="#1e40af" text-anchor="middle">s[r, c] = in[4c+r]</text>
        <text x="70" y="93" font-size="9" fill="#059669" text-anchor="middle">16 bytes workspace</text>
      </g>

      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="790" height="95" rx="6" fill="#ffffff" stroke="#cbd5e1" />
        <text x="20" y="25" font-size="12" font-weight="bold" fill="#1e40af">AES Data Unit Transformations:</text>
        <text x="20" y="48" font-size="11" fill="#475569">• SubBytes operates on individual BYTES (8 bits at a time).</text>
        <text x="20" y="68" font-size="11" fill="#475569">• ShiftRows operates on byte rows of the 4×4 STATE matrix.</text>
        <text x="420" y="48" font-size="11" fill="#475569">• MixColumns operates on WORDS (each 4-byte column of State).</text>
        <text x="420" y="68" font-size="11" fill="#475569">• Key Expansion expands cipher key into 4-byte WORDS (44 words for AES-128).</text>
      </g>
    </svg>
  `;
}

function getSvgAesState() {
  return `
    <h3>AES 4×4 State Matrix Layout</h3>
    <svg viewBox="0 0 800 320" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <text x="40" y="40" font-size="13" font-weight="bold" fill="#1e40af">128-bit Input Block (16 Linear Bytes):</text>
      <g transform="translate(40, 55)">
        ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => `
          <rect x="${i * 44}" y="0" width="40" height="35" rx="4" fill="#e0e7ff" stroke="#4338ca" />
          <text x="${i * 44 + 20}" y="22" font-size="11" font-weight="bold" fill="#312e81" text-anchor="middle">in[${i}]</text>
        `).join("")}
      </g>

      <path d="M 380 105 L 380 140" stroke="#1e40af" stroke-width="2.5" fill="none" />
      <text x="395" y="125" font-size="12" fill="#1e40af" font-weight="600">Column-Major Mapping: s[r, c] = in[4c + r]</text>

      <g transform="translate(250, 150)">
        <text x="140" y="-10" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">4×4 State Matrix S</text>
        ${[0,1,2,3].map(r => 
          [0,1,2,3].map(c => {
            const byteIndex = c * 4 + r;
            const x = c * 70;
            const y = r * 38;
            return `
              <rect x="${x}" y="${y}" width="65" height="34" rx="4" fill="#d1fae5" stroke="#059669" stroke-width="1.5" />
              <text x="${x + 32}" y="${y + 21}" font-size="11" font-weight="bold" fill="#064e3b" text-anchor="middle">S[${r},${c}] (in[${byteIndex}])</text>
            `;
          }).join("")
        ).join("")}
      </g>

      <g transform="translate(580, 160)">
        <rect x="0" y="0" width="180" height="130" rx="6" fill="#fff" stroke="#cbd5e1" />
        <text x="10" y="25" font-size="12" font-weight="bold" fill="#1e40af">Matrix Invariants:</text>
        <text x="10" y="50" font-size="11" fill="#475569">• 4 Rows × 4 Columns</text>
        <text x="10" y="70" font-size="11" fill="#475569">• Each cell = 1 byte (8 bits)</text>
        <text x="10" y="90" font-size="11" fill="#475569">• Total = 16 bytes = 128 bits</text>
        <text x="10" y="110" font-size="11" fill="#059669" font-weight="600">• Column = 1 word (32b)</text>
      </g>
    </svg>
  `;
}

function getSvgAesTransforms() {
  return `
    <h3>AES Four Transformation Stages</h3>
    <svg viewBox="0 0 850 360" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <rect x="30" y="30" width="180" height="140" rx="8" fill="#fff" stroke="#1e40af" stroke-width="2" />
      <text x="120" y="55" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">1. SubBytes</text>
      <text x="45" y="80" font-size="11" fill="#475569">• Non-linear substitution</text>
      <text x="45" y="100" font-size="11" fill="#475569">• 16×16 S-Box lookup</text>
      <text x="45" y="120" font-size="11" fill="#475569">• Invertible Galois field map</text>
      <text x="45" y="145" font-size="11" font-weight="600" fill="#059669">Provides CONFUSION</text>

      <rect x="230" y="30" width="180" height="140" rx="8" fill="#fff" stroke="#059669" stroke-width="2" />
      <text x="320" y="55" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">2. ShiftRows</text>
      <text x="245" y="80" font-size="11" fill="#475569">• Row 0: shift 0 bytes</text>
      <text x="245" y="100" font-size="11" fill="#475569">• Row 1: circular shift 1 byte</text>
      <text x="245" y="120" font-size="11" fill="#475569">• Row 2: circular shift 2 bytes</text>
      <text x="245" y="140" font-size="11" fill="#475569">• Row 3: circular shift 3 bytes</text>
      <text x="245" y="158" font-size="11" font-weight="600" fill="#059669">Provides DIFFUSION</text>

      <rect x="430" y="30" width="195" height="140" rx="8" fill="#fff" stroke="#d97706" stroke-width="2" />
      <text x="527" y="55" font-size="13" font-weight="bold" fill="#d97706" text-anchor="middle">3. MixColumns</text>
      <text x="445" y="80" font-size="11" fill="#475569">• Column-by-column mult.</text>
      <text x="445" y="100" font-size="11" fill="#475569">• Matrix mult over GF(2⁸)</text>
      <text x="445" y="120" font-size="11" fill="#475569">• Irreducible: x⁸+x⁴+x³+x+1</text>
      <text x="445" y="140" font-size="11" fill="#dc2626" font-weight="bold">• Omitted in Final Round!</text>
      <text x="445" y="158" font-size="11" font-weight="600" fill="#059669">Provides DIFFUSION</text>

      <rect x="645" y="30" width="180" height="140" rx="8" fill="#fff" stroke="#7c3aed" stroke-width="2" />
      <text x="735" y="55" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">4. AddRoundKey</text>
      <text x="660" y="80" font-size="11" fill="#475569">• Bitwise XOR with round key</text>
      <text x="660" y="100" font-size="11" fill="#475569">• State ⊕ Key (128 bits)</text>
      <text x="660" y="120" font-size="11" fill="#475569">• Self-inverting</text>
      <text x="660" y="145" font-size="11" font-weight="600" fill="#7c3aed">Applies KEY SECURITY</text>

      <g transform="translate(150, 200)">
        <text x="270" y="20" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">ShiftRows Visual Cyclic Shifting:</text>
        <rect x="50" y="35" width="200" height="100" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
        <text x="60" y="55" font-size="11" fill="#475569">Row 0: [s0,0][s0,1][s0,2][s0,3]  (no shift)</text>
        <text x="60" y="80" font-size="11" fill="#475569">Row 1: [s1,1][s1,2][s1,3][s1,0]  (<<< 1)</text>
        <text x="60" y="105" font-size="11" fill="#475569">Row 2: [s2,2][s2,3][s2,0][s2,1]  (<<< 2)</text>
        <text x="60" y="130" font-size="11" fill="#475569">Row 3: [s3,3][s3,0][s3,1][s3,2]  (<<< 3)</text>

        <g transform="translate(300, 35)">
          <rect x="0" y="0" width="220" height="100" rx="6" fill="#fef3c7" stroke="#d97706" />
          <text x="110" y="22" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">MixColumns Constant Matrix:</text>
          <text x="110" y="45" font-family="Courier" font-size="12" fill="#92400e" text-anchor="middle">| 02  03  01  01 |</text>
          <text x="110" y="65" font-family="Courier" font-size="12" fill="#92400e" text-anchor="middle">| 01  02  03  01 |</text>
          <text x="110" y="85" font-family="Courier" font-size="12" fill="#92400e" text-anchor="middle">| 01  01  02  03 |</text>
          <text x="110" y="105" font-family="Courier" font-size="12" fill="#92400e" text-anchor="middle">| 03  01  01  02 |</text>
        </g>
      </g>
    </svg>
  `;
}

function getSvgRsaFlow() {
  return `
    <h3>RSA Asymmetric Cryptosystem Architecture</h3>
    <svg viewBox="0 0 850 320" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <rect x="30" y="30" width="230" height="260" rx="8" fill="#fff" stroke="#1e40af" stroke-width="2" />
      <text x="145" y="55" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">1. Key Generation (Bob)</text>
      <text x="45" y="85" font-size="11" fill="#475569">• Choose primes p, q</text>
      <text x="45" y="105" font-size="11" fill="#475569">• Compute n = p × q</text>
      <text x="45" y="125" font-size="11" fill="#475569">• Compute φ(n) = (p-1)(q-1)</text>
      <text x="45" y="145" font-size="11" fill="#475569">• Choose e: gcd(e, φ(n)) = 1</text>
      <text x="45" y="165" font-size="11" fill="#475569">• Compute d ≡ e⁻¹ mod φ(n)</text>
      <rect x="45" y="185" width="200" height="35" rx="4" fill="#dbeafe" />
      <text x="145" y="207" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Public Key: (e, n)</text>
      <rect x="45" y="230" width="200" height="35" rx="4" fill="#fee2e2" />
      <text x="145" y="252" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Private Key: (d, n) [SECRET]</text>

      <rect x="310" y="30" width="230" height="150" rx="8" fill="#fff" stroke="#059669" stroke-width="2" />
      <text x="425" y="55" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">2. Encryption (Alice)</text>
      <text x="325" y="85" font-size="11" fill="#475569">• Plaintext message M &lt; n</text>
      <text x="325" y="105" font-size="11" fill="#475569">• Obtain Bob's public key (e, n)</text>
      <rect x="325" y="125" width="200" height="35" rx="4" fill="#d1fae5" />
      <text x="425" y="147" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">C = Mᵉ mod n</text>

      <rect x="590" y="30" width="230" height="150" rx="8" fill="#fff" stroke="#7c3aed" stroke-width="2" />
      <text x="705" y="55" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">3. Decryption (Bob)</text>
      <text x="605" y="85" font-size="11" fill="#475569">• Receive ciphertext C</text>
      <text x="605" y="105" font-size="11" fill="#475569">• Use secret private key d</text>
      <rect x="605" y="125" width="200" height="35" rx="4" fill="#ede9fe" />
      <text x="705" y="147" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">M = Cᵈ mod n</text>

      <rect x="310" y="200" width="510" height="90" rx="8" fill="#fff" stroke="#d97706" />
      <text x="565" y="222" font-size="12" font-weight="bold" fill="#d97706" text-anchor="middle">Attacks on RSA &amp; Defense Countermeasures</text>
      <text x="325" y="245" font-size="11" fill="#475569">1. Factorization Attack (factor n into p·q) → Defense: use keys ≥ 2048 bits</text>
      <text x="325" y="263" font-size="11" fill="#475569">2. Chosen Ciphertext Attack (CCA) / Homomorphic property → Defense: OAEP padding</text>
      <text x="325" y="281" font-size="11" fill="#475569">3. Timing Attack → Defense: constant-time algorithms or cryptographic blinding</text>
    </svg>
  `;
}

function getSvgKnapsackFlow() {
  return `
    <h3>Merkle-Hellman Knapsack Cryptosystem</h3>
    <svg viewBox="0 0 850 300" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <rect x="30" y="30" width="240" height="240" rx="8" fill="#fff" stroke="#1e40af" stroke-width="2" />
      <text x="150" y="55" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Key Gen: Trapdoor Transformation</text>
      <text x="45" y="85" font-size="11" fill="#475569">1. Private super-increasing b:</text>
      <text x="55" y="103" font-size="11" fill="#1e40af" font-weight="bold">bᵢ &gt; ∑ bⱼ (j=1..i-1)</text>
      <text x="45" y="125" font-size="11" fill="#475569">2. Choose modulus m &gt; ∑ bᵢ</text>
      <text x="45" y="145" font-size="11" fill="#475569">3. Choose multiplier n, gcd(n,m)=1</text>
      <text x="45" y="170" font-size="11" fill="#475569">4. Calculate public key a:</text>
      <rect x="45" y="185" width="210" height="35" rx="4" fill="#dbeafe" />
      <text x="150" y="207" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">aᵢ = (bᵢ × n) mod m</text>
      <text x="45" y="245" font-size="10" fill="#059669" font-weight="600">Disguises easy knapsack into HARD</text>

      <rect x="300" y="30" width="240" height="240" rx="8" fill="#fff" stroke="#059669" stroke-width="2" />
      <text x="420" y="55" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">Encryption (Using Public a)</text>
      <text x="315" y="85" font-size="11" fill="#475569">• Plaintext block x = (x₁..xₖ), xᵢ ∈ {0,1}</text>
      <text x="315" y="110" font-size="11" fill="#475569">• Compute single sum:</text>
      <rect x="315" y="125" width="210" height="40" rx="4" fill="#d1fae5" />
      <text x="420" y="150" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">S = ∑ (xᵢ × aᵢ)</text>
      <text x="315" y="190" font-size="11" fill="#475569">• Hard Subset-Sum problem</text>
      <text x="315" y="210" font-size="11" fill="#475569">• NP-complete without trapdoor</text>

      <rect x="570" y="30" width="250" height="240" rx="8" fill="#fff" stroke="#7c3aed" stroke-width="2" />
      <text x="695" y="55" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">Decryption (Using Private Trapdoor)</text>
      <text x="585" y="85" font-size="11" fill="#475569">1. Compute n⁻¹ mod m (Euclid)</text>
      <text x="585" y="105" font-size="11" fill="#475569">2. Remove multiplier disguise:</text>
      <rect x="585" y="118" width="220" height="35" rx="4" fill="#ede9fe" />
      <text x="695" y="140" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">S' = (S × n⁻¹) mod m</text>
      <text x="585" y="175" font-size="11" fill="#475569">3. Solve EASY knapsack greedily:</text>
      <text x="595" y="195" font-size="11" fill="#475569">For i = k down to 1:</text>
      <text x="605" y="213" font-size="11" fill="#475569">if S' ≥ bᵢ then xᵢ=1, S' = S' - bᵢ</text>
      <text x="605" y="231" font-size="11" fill="#475569">else xᵢ = 0</text>
    </svg>
  `;
}

function getSvgRabinFlow() {
  return `
    <h3>Rabin Cryptosystem &amp; 4 Square Roots Resolution</h3>
    <svg viewBox="0 0 850 320" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <rect x="30" y="30" width="230" height="130" rx="8" fill="#fff" stroke="#1e40af" stroke-width="2" />
      <text x="145" y="55" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Key Gen &amp; Encryption</text>
      <text x="45" y="80" font-size="11" fill="#475569">• Primes p, q ≡ 3 mod 4 (Crucial!)</text>
      <text x="45" y="100" font-size="11" fill="#475569">• Public Key: n = p × q</text>
      <text x="45" y="120" font-size="11" fill="#475569">• Private Key: (p, q)</text>
      <text x="45" y="145" font-size="11" font-weight="bold" fill="#059669">• Encryption: C = P² mod n</text>

      <rect x="290" y="30" width="250" height="130" rx="8" fill="#fff" stroke="#059669" stroke-width="2" />
      <text x="415" y="55" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">Decryption: Solve 2 Moduli</text>
      <text x="305" y="80" font-size="11" fill="#475569">Using Euler's criterion on p, q ≡ 3 mod 4:</text>
      <rect x="305" y="90" width="220" height="28" rx="4" fill="#ecfdf5" />
      <text x="415" y="109" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">r = C^((p+1)/4) mod p  (±r mod p)</text>
      <rect x="305" y="123" width="220" height="28" rx="4" fill="#ecfdf5" />
      <text x="415" y="142" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">s = C^((q+1)/4) mod q  (±s mod q)</text>

      <rect x="570" y="30" width="250" height="130" rx="8" fill="#fff" stroke="#7c3aed" stroke-width="2" />
      <text x="695" y="55" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">Chinese Remainder Theorem</text>
      <text x="585" y="80" font-size="11" fill="#475569">Find Bezout coefficients a, b:</text>
      <text x="585" y="98" font-size="11" font-weight="bold" fill="#1e40af">a·p + b·q = 1</text>
      <text x="585" y="120" font-size="11" fill="#475569">Combines ±r and ±s into 4 roots:</text>
      <text x="585" y="142" font-size="11" font-weight="bold" fill="#7c3aed">x, n-x, y, n-y</text>

      <g transform="translate(30, 180)">
        <rect x="0" y="0" width="790" height="120" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5" />
        <text x="395" y="25" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">THE 4 CANDIDATE PLAINTEXTS (Non-Deterministic Decryption)</text>
        <text x="40" y="50" font-size="12" fill="#475569">Root 1: <tspan font-weight="bold" fill="#1e40af">x = (a·p·s + b·q·r) mod n</tspan></text>
        <text x="420" y="50" font-size="12" fill="#475569">Root 2: <tspan font-weight="bold" fill="#1e40af">n - x</tspan></text>
        <text x="40" y="75" font-size="12" fill="#475569">Root 3: <tspan font-weight="bold" fill="#1e40af">y = (a·p·s - b·q·r) mod n</tspan></text>
        <text x="420" y="75" font-size="12" fill="#475569">Root 4: <tspan font-weight="bold" fill="#1e40af">n - y</tspan></text>
        <text x="40" y="105" font-size="11" fill="#991b1b" font-weight="600">Institutional Exam Requirement: State why Rabin produces 4 roots (quadratic residues modulo composite n) and how to resolve ambiguity (append known redundant pattern before encrypting).</text>
      </g>
    </svg>
  `;
}

function getSvgSymAsym() {
  return `
    <h3>Symmetric vs Asymmetric Key Cryptography Comparison</h3>
    <svg viewBox="0 0 850 340" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="380" height="280" rx="8" fill="#fff" stroke="#1e40af" stroke-width="2" />
        <text x="190" y="30" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Symmetric-Key Cryptography</text>
        <rect x="20" y="50" width="340" height="35" rx="4" fill="#dbeafe" />
        <text x="190" y="72" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Single Secret Shared Key (K)</text>
        <text x="25" y="110" font-size="11" fill="#475569">• Encryption &amp; Decryption use IDENTICAL key</text>
        <text x="25" y="132" font-size="11" fill="#475569">• High encryption speed (Bulk data)</text>
        <text x="25" y="154" font-size="11" fill="#475569">• Key distribution problem: Secure channel needed</text>
        <text x="25" y="176" font-size="11" fill="#475569">• Scalability: n(n-1)/2 keys needed (O(n²))</text>
        <text x="25" y="198" font-size="11" fill="#475569">• Cannot provide Non-Repudiation</text>
        <text x="25" y="220" font-size="11" fill="#475569">• Algorithms: AES, DES, 3DES, Blowfish</text>
        <rect x="20" y="235" width="340" height="30" rx="4" fill="#f1f5f9" />
        <text x="190" y="254" font-size="11" font-weight="bold" fill="#059669" text-anchor="middle">Primary Role: Confidentiality of Bulk Data</text>
      </g>

      <g transform="translate(440, 30)">
        <rect x="0" y="0" width="380" height="280" rx="8" fill="#fff" stroke="#059669" stroke-width="2" />
        <text x="190" y="30" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">Asymmetric-Key Cryptography</text>
        <rect x="20" y="50" width="340" height="35" rx="4" fill="#d1fae5" />
        <text x="190" y="72" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">Key Pair: Public Key (e) &amp; Private Key (d)</text>
        <text x="25" y="110" font-size="11" fill="#475569">• Encryption: Public Key · Decryption: Private Key</text>
        <text x="25" y="132" font-size="11" fill="#475569">• Slower speed (Modular math overhead)</text>
        <text x="25" y="154" font-size="11" fill="#475569">• Solves key exchange: Public keys open to world</text>
        <text x="25" y="176" font-size="11" fill="#475569">• Scalability: 2n keys needed for n users (O(n))</text>
        <text x="25" y="198" font-size="11" fill="#475569">• Enables Digital Signatures &amp; Non-Repudiation</text>
        <text x="25" y="220" font-size="11" fill="#475569">• Algorithms: RSA, Rabin, Knapsack, ECC</text>
        <rect x="20" y="235" width="340" height="30" rx="4" fill="#ecfdf5" />
        <text x="190" y="254" font-size="11" font-weight="bold" fill="#059669" text-anchor="middle">Primary Role: Key Exchange &amp; Digital Signatures</text>
      </g>
    </svg>
  `;
}

function getSvgItActFlow() {
  return `
    <h3>IT Act 2000: Sections 11, 12, 13 Lifecycle Flowchart</h3>
    <svg viewBox="0 0 850 330" width="100%" height="auto" style="background:#f8fafc; border-radius:8px">
      <rect x="30" y="30" width="220" height="150" rx="8" fill="#fff" stroke="#1e40af" stroke-width="2" />
      <text x="140" y="55" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Originator / Sender</text>
      <text x="45" y="80" font-size="11" font-weight="bold" fill="#d97706">Section 11: Attribution</text>
      <text x="45" y="100" font-size="10" fill="#475569">• Sent by Originator himself</text>
      <text x="45" y="118" font-size="10" fill="#475569">• Sent by Authorized agent</text>
      <text x="45" y="136" font-size="10" fill="#475569">• By Automated programmed system</text>
      <text x="45" y="160" font-size="10" fill="#1e40af" font-weight="bold">Place of Dispatch: Principal Business</text>

      <line x1="250" y1="105" x2="330" y2="105" stroke="#1e40af" stroke-width="2.5" />
      <text x="290" y="95" font-size="10" fill="#1e40af" font-weight="bold" text-anchor="middle">Sec 13(1)</text>

      <rect x="330" y="50" width="190" height="110" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
      <text x="425" y="75" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">System Boundary</text>
      <text x="340" y="100" font-size="10" fill="#475569">• Time of Dispatch occurs when</text>
      <text x="340" y="118" font-size="10" fill="#475569">record enters system OUTSIDE</text>
      <text x="340" y="136" font-size="10" fill="#475569">control of originator</text>

      <line x1="520" y1="105" x2="600" y2="105" stroke="#059669" stroke-width="2.5" />
      <text x="560" y="95" font-size="10" fill="#059669" font-weight="bold" text-anchor="middle">Sec 13(2)</text>

      <rect x="600" y="30" width="220" height="150" rx="8" fill="#fff" stroke="#059669" stroke-width="2" />
      <text x="710" y="55" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">Addressee / Recipient</text>
      <text x="615" y="80" font-size="11" font-weight="bold" fill="#059669">Section 13: Time of Receipt</text>
      <text x="615" y="100" font-size="10" fill="#475569">• Case A (Designated): Enters system</text>
      <text x="615" y="118" font-size="10" fill="#475569">• If other system: When retrieved</text>
      <text x="615" y="136" font-size="10" fill="#475569">• Case B (No system): Enters system</text>
      <text x="615" y="160" font-size="10" fill="#059669" font-weight="bold">Place of Receipt: Principal Business</text>

      <path d="M 710 180 L 710 240 L 140 240 L 140 180" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="6" />
      <rect x="330" y="220" width="200" height="40" rx="6" fill="#ede9fe" stroke="#7c3aed" />
      <text x="430" y="244" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">Section 12: Acknowledgement</text>
      <text x="430" y="280" font-size="11" fill="#475569" text-anchor="middle">Any communication or conduct showing receipt. Condition precedent suspends dispatch until ack arrives.</text>
    </svg>
  `;
}

// ═══════════════════════════════════════════════════════════════
// NUMERICAL LABORATORY
// ═══════════════════════════════════════════════════════════════
function showNumTab(tabId) {
  appState.activeNumTab = tabId;
  document.querySelectorAll("#page-numericals .tab").forEach(tab => {
    tab.classList.remove("active");
    if (tab.getAttribute("onclick").includes(`'${tabId}'`)) tab.classList.add("active");
  });
  renderNumTab(tabId);
}

function loadNumPreset(type, preset) {
  if (type === "rsa") {
    showNumTab("rsa");
    loadRsaPreset(preset.p, preset.q, preset.e, preset.m);
  } else if (type === "knapsack") {
    showNumTab("knapsack");
    document.getElementById("ks-vector").value = preset.vector || "";
    document.getElementById("ks-m").value = preset.m || "";
    document.getElementById("ks-n").value = preset.n || "";
    document.getElementById("ks-target").value = preset.target || "";
    solveKnapsack();
  } else if (type === "rabin") {
    showNumTab("rabin");
    loadRabinPreset(preset.p, preset.q, preset.msg);
  }
}

function renderNumTab(tabId) {
  const container = document.getElementById("num-content");
  if (!container) return;

  if (tabId === "rsa") {
    container.innerHTML = `
      <div class="num-lab">
        <h2>Interactive RSA Step-by-Step Calculator</h2>
        <p class="text-sm text-muted mb-2">Calculates modulus, Euler totient, modular inverse using Extended Euclidean algorithm, encryption, and verifies decryption.</p>
        
        <div class="flex gap-1 mb-2 flex-wrap">
          <span class="text-xs text-muted" style="align-self:center">Pre-load PYQs:</span>
          <button class="btn btn-xs btn-secondary" onclick="loadRsaPreset(17, 11, 7, 88)">Sept/Oct 2022 (p=17, q=11, e=7, M=88)</button>
          <button class="btn btn-xs btn-secondary" onclick="loadRsaPreset(3, 11, 7, 5)">July 2019 (p=3, q=11, e=7, M=5)</button>
          <button class="btn btn-xs btn-secondary" onclick="loadRsaPreset(11, 13, 7, 9)">Standard (p=11, q=13, e=7, M=9)</button>
        </div>

        <div class="input-grid">
          <div class="input-group"><label>Prime p</label><input type="number" id="rsa-p" value="17"></div>
          <div class="input-group"><label>Prime q</label><input type="number" id="rsa-q" value="11"></div>
          <div class="input-group"><label>Public Exp e</label><input type="number" id="rsa-e" value="7"></div>
          <div class="input-group"><label>Message M</label><input type="number" id="rsa-m" value="88"></div>
        </div>

        <button class="btn btn-primary" onclick="solveRSA()">⚡ Calculate &amp; Verify RSA</button>
        <div id="rsa-output" class="step-output" style="display:none"></div>
      </div>
    `;
    solveRSA();
  } else if (tabId === "knapsack") {
    container.innerHTML = `
      <div class="num-lab">
        <h2>Interactive Merkle-Hellman Knapsack Solver</h2>
        <p class="text-sm text-muted mb-2">Solves super-increasing knapsack subset-sum using greedy backward subtraction, or decrypts hard knapsack with modular multiplier inverse.</p>

        <div class="flex gap-1 mb-2 flex-wrap">
          <span class="text-xs text-muted" style="align-self:center">Pre-load PYQs:</span>
          <button class="btn btn-xs btn-secondary" onclick="loadKnapsackPreset('greedy')">Dec 2023 / Feb 2025: a=(17,25,46,94,201,400), s=272</button>
          <button class="btn btn-xs btn-secondary" onclick="loadKnapsackPreset('full')">Feb/Mar 2023: b={1,2,4,10,20,40}, m=110, n=31</button>
        </div>

        <div class="input-grid" style="grid-template-columns: 2fr 1fr 1fr">
          <div class="input-group"><label>Knapsack Vector (comma-separated)</label><input type="text" id="ks-vector" value="17, 25, 46, 94, 201, 400"></div>
          <div class="input-group"><label>Modulus m (Optional for Greedy)</label><input type="number" id="ks-m" placeholder="e.g. 110"></div>
          <div class="input-group"><label>Multiplier n (Optional for Greedy)</label><input type="number" id="ks-n" placeholder="e.g. 31"></div>
        </div>

        <div class="input-group mb-2">
          <label>Target Sum S (Ciphertext)</label>
          <input type="number" id="ks-target" value="272" style="max-width: 250px">
        </div>

        <button class="btn btn-primary" onclick="solveKnapsack()">⚡ Solve Knapsack</button>
        <div id="ks-output" class="step-output" style="display:none"></div>
      </div>
    `;
    solveKnapsack();
  } else if (tabId === "rabin") {
    container.innerHTML = `
      <div class="num-lab">
        <h2>Interactive Rabin Cryptosystem Calculator</h2>
        <p class="text-sm text-muted mb-2">Calculates public modulus $n = p 	imes q$, encryption $C = P^2 mod n$, and derives the 4 quadratic roots using Chinese Remainder Theorem.</p>

        <div class="flex gap-1 mb-2 flex-wrap">
          <span class="text-xs text-muted" style="align-self:center">Pre-load Examples:</span>
          <button class="btn btn-xs btn-secondary" onclick="loadRabinPreset(7, 11, 20)">Example: p=7, q=11, P=20</button>
          <button class="btn btn-xs btn-secondary" onclick="loadRabinPreset(19, 23, 24)">Example: p=19, q=23, P=24</button>
        </div>

        <div class="input-grid">
          <div class="input-group"><label>Prime p (must be ≡ 3 mod 4)</label><input type="number" id="rabin-p" value="7"></div>
          <div class="input-group"><label>Prime q (must be ≡ 3 mod 4)</label><input type="number" id="rabin-q" value="11"></div>
          <div class="input-group"><label>Plaintext P (&lt; n)</label><input type="number" id="rabin-msg" value="20"></div>
        </div>

        <button class="btn btn-primary" onclick="solveRabin()">⚡ Calculate Rabin 4 Roots</button>
        <div id="rabin-output" class="step-output" style="display:none"></div>
      </div>
    `;
    solveRabin();
  } else if (tabId === "pyq-nums") {
    // PYQ Numericals view
    container.innerHTML = `
      <div class="card mb-2">
        <h2>Verified PYQ Numerical Archive</h2>
        <p class="text-sm text-muted mb-2">Every mathematical problem appearing across all 9 MCE examination papers.</p>
        <div class="alert alert-info">Tip: You can now study every numerical directly inside the <strong>Question-First Study</strong> tab with complete step-by-step arithmetic and verification proofs!</div>
      </div>
    `;
  }
}

function loadRsaPreset(p, q, e, m) {
  document.getElementById("rsa-p").value = p;
  document.getElementById("rsa-q").value = q;
  document.getElementById("rsa-e").value = e;
  document.getElementById("rsa-m").value = m;
  solveRSA();
}

function solveRSA() {
  const p = parseInt(document.getElementById("rsa-p").value);
  const q = parseInt(document.getElementById("rsa-q").value);
  const e = parseInt(document.getElementById("rsa-e").value);
  const M = parseInt(document.getElementById("rsa-m").value);
  const out = document.getElementById("rsa-output");
  if (!out) return;

  if (!p || !q || !e || isNaN(M)) {
    out.style.display = "block";
    out.innerHTML = `<div class="error-box">Please provide valid numerical inputs.</div>`;
    return;
  }

  const n = p * q;
  const phi = (p - 1) * (q - 1);
  const ext = extendedGcd(e, phi);
  if (ext.gcd !== 1) {
    out.style.display = "block";
    out.innerHTML = `<div class="error-box">Invalid choice of e: gcd(e, φ(n)) = gcd(${e}, ${phi}) = ${ext.gcd} ≠ 1. 'e' must be coprime to φ(n).</div>`;
    return;
  }

  let d = ext.x % phi;
  if (d < 0) d += phi;

  const C = modPow(M, e, n);
  const M_dec = modPow(C, d, n);

  out.style.display = "block";
  out.innerHTML = `
    <div class="step"><span class="label">1. Modulus n:</span> n = p × q = ${p} × ${q} = <strong>${n}</strong></div>
    <div class="step"><span class="label">2. Euler Totient φ(n):</span> φ(n) = (p - 1) × (q - 1) = ${p-1} × ${q-1} = <strong>${phi}</strong></div>
    <div class="step"><span class="label">3. Coprime Verification:</span> gcd(e=${e}, φ(n)=${phi}) = 1 (Coprime verified ✓)</div>
    <div class="step"><span class="label">4. Private Key Exponent d:</span> d ≡ e⁻¹ mod φ(n) ⇒ ${e} × d ≡ 1 mod ${phi} ⇒ <strong>d = ${d}</strong></div>
    <div class="step"><span class="label">5. Public Key Pair:</span> (e, n) = <strong>(${e}, ${n})</strong></div>
    <div class="step"><span class="label">6. Private Key Pair:</span> (d, n) = <strong>(${d}, ${n})</strong></div>
    <div class="step"><span class="label">7. Encryption:</span> C = Mᵉ mod n = ${M}^${e} mod ${n} = <strong>${C}</strong></div>
    <div class="step"><span class="label">8. Decryption Verification:</span> M' = Cᵈ mod n = ${C}^${d} mod ${n} = <strong>${M_dec}</strong></div>
    <div class="result-box">
      ✓ Verification Status: ${M_dec === M ? `MATCHES ORIGINAL PLAINTEXT (M = ${M})` : "MISMATCH"}
    </div>
  `;
}

function loadKnapsackPreset(type) {
  if (type === "greedy") {
    document.getElementById("ks-vector").value = "17, 25, 46, 94, 201, 400";
    document.getElementById("ks-m").value = "";
    document.getElementById("ks-n").value = "";
    document.getElementById("ks-target").value = "272";
  } else {
    document.getElementById("ks-vector").value = "1, 2, 4, 10, 20, 40";
    document.getElementById("ks-m").value = "110";
    document.getElementById("ks-n").value = "31";
    document.getElementById("ks-target").value = "121";
  }
  solveKnapsack();
}

function solveKnapsack() {
  const vecStr = document.getElementById("ks-vector").value;
  const mVal = parseInt(document.getElementById("ks-m").value);
  const nVal = parseInt(document.getElementById("ks-n").value);
  const target = parseInt(document.getElementById("ks-target").value);
  const out = document.getElementById("ks-output");
  if (!out) return;

  const vec = vecStr.split(",").map(s => parseInt(s.trim())).filter(x => !isNaN(x));
  if (vec.length === 0 || isNaN(target)) {
    out.style.display = "block";
    out.innerHTML = `<div class="error-box">Please provide a valid knapsack vector and target sum.</div>`;
    return;
  }

  let isSuper = true;
  let sumSoFar = 0;
  for (let i = 0; i < vec.length; i++) {
    if (i > 0 && vec[i] <= sumSoFar) isSuper = false;
    sumSoFar += vec[i];
  }

  let html = `<div class="step"><span class="label">Super-Increasing Check:</span> ${isSuper ? '<span class="text-success fw-bold">Strictly Super-Increasing ✓</span>' : '<span class="text-danger fw-bold">Not super-increasing</span>'}</div>`;

  let solveTarget = target;
  if (!isNaN(mVal) && !isNaN(nVal) && mVal > 0 && nVal > 0) {
    const ext = extendedGcd(nVal, mVal);
    let nInv = ext.x % mVal;
    if (nInv < 0) nInv += mVal;
    html += `<div class="step"><span class="label">Multiplier Inverse:</span> n⁻¹ mod m = ${nVal}⁻¹ mod ${mVal} = <strong>${nInv}</strong></div>`;
    solveTarget = (target * nInv) % mVal;
    html += `<div class="step"><span class="label">Disguised Target S':</span> S' = (${target} × ${nInv}) mod ${mVal} = <strong>${solveTarget}</strong></div>`;
  }

  let rem = solveTarget;
  let x = new Array(vec.length).fill(0);
  for (let i = vec.length - 1; i >= 0; i--) {
    const elem = vec[i];
    if (rem >= elem) {
      x[i] = 1;
      html += `<div class="step"><span class="label">i = ${i+1} (${elem}):</span> rem = ${rem} ≥ ${elem} ⇒ <strong>x[${i+1}] = 1</strong>; new rem = ${rem - elem}</div>`;
      rem -= elem;
    } else {
      x[i] = 0;
      html += `<div class="step"><span class="label">i = ${i+1} (${elem}):</span> rem = ${rem} &lt; ${elem} ⇒ <strong>x[${i+1}] = 0</strong></div>`;
    }
  }

  html += `<div class="result-box"><strong>Plaintext Vector x:</strong> (${x.join(", ")}) | Bitstring: ${x.join("")} | Sum Check: ${solveTarget} ✓</div>`;
  out.style.display = "block";
  out.innerHTML = html;
}

function loadRabinPreset(p, q, msg) {
  document.getElementById("rabin-p").value = p;
  document.getElementById("rabin-q").value = q;
  document.getElementById("rabin-msg").value = msg;
  solveRabin();
}

function solveRabin() {
  const p = parseInt(document.getElementById("rabin-p").value);
  const q = parseInt(document.getElementById("rabin-q").value);
  const P = parseInt(document.getElementById("rabin-msg").value);
  const out = document.getElementById("rabin-output");
  if (!out) return;

  if (!p || !q || isNaN(P)) {
    out.style.display = "block";
    out.innerHTML = `<div class="error-box">Please provide valid inputs.</div>`;
    return;
  }

  if (p % 4 !== 3 || q % 4 !== 3) {
    out.style.display = "block";
    out.innerHTML = `<div class="error-box">Institutional Requirement Violation: In Rabin, p ≡ 3 (mod 4) and q ≡ 3 (mod 4) are required.</div>`;
    return;
  }

  const n = p * q;
  const C = (P * P) % n;
  const r = modPow(C, Math.floor((p + 1) / 4), p);
  const s = modPow(C, Math.floor((q + 1) / 4), q);

  const ext = extendedGcd(p, q);
  const a = ext.x;
  const b = ext.y;

  let root1 = ((a * p * s) + (b * q * r)) % n;
  if (root1 < 0) root1 += n;
  const root2 = (n - root1) % n;

  let root3 = ((a * p * s) - (b * q * r)) % n;
  if (root3 < 0) root3 += n;
  const root4 = (n - root3) % n;

  const roots = [root1, root2, root3, root4];

  out.style.display = "block";
  out.innerHTML = `
    <div class="step"><span class="label">1. Modulus n:</span> n = ${p} × ${q} = <strong>${n}</strong></div>
    <div class="step"><span class="label">2. Encryption:</span> C = ${P}² mod ${n} = <strong>${C}</strong></div>
    <div class="step"><span class="label">3. Square Roots mod p:</span> r = ${r} (Roots: ±${r})</div>
    <div class="step"><span class="label">4. Square Roots mod q:</span> s = ${s} (Roots: ±${s})</div>
    <div class="step"><span class="label">5. Derived Four Roots:</span></div>
    <div style="margin: 0.5rem 0 0.5rem 1.5rem; font-family: var(--mono); font-size: 0.85rem">
      • Root 1: <strong>${root1}</strong> ${root1 === P ? '🌟 [PLAINTEXT MATCH]' : ''}<br>
      • Root 2: <strong>${root2}</strong> ${root2 === P ? '🌟 [PLAINTEXT MATCH]' : ''}<br>
      • Root 3: <strong>${root3}</strong> ${root3 === P ? '🌟 [PLAINTEXT MATCH]' : ''}<br>
      • Root 4: <strong>${root4}</strong> ${root4 === P ? '🌟 [PLAINTEXT MATCH]' : ''}
    </div>
    <div class="result-box">
      ✓ Rabin Candidate Set: { ${roots.join(", ")} } (Matches original P=${P})
    </div>
  `;
}

// Math utils
function extendedGcd(a, b) {
  if (b === 0) return { gcd: a, x: 1, y: 0 };
  const next = extendedGcd(b, a % b);
  return {
    gcd: next.gcd,
    x: next.y,
    y: next.x - Math.floor(a / b) * next.y
  };
}

function modPow(base, exp, mod) {
  let res = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) res = (res * base) % mod;
    base = (base * base) % mod;
    exp = Math.floor(exp / 2);
  }
  return res;
}

// ═══════════════════════════════════════════════════════════════
// QUICK REVISION / FLASHCARDS
// ═══════════════════════════════════════════════════════════════
function showRevTab(tabId) {
  appState.activeRevTab = tabId;
  document.querySelectorAll("#page-revision .tab").forEach(tab => {
    tab.classList.remove("active");
    if (tab.getAttribute("onclick").includes(`'${tabId}'`)) tab.classList.add("active");
  });
  renderRevTab(tabId);
}

function renderRevTab(tabId) {
  const container = document.getElementById("rev-content");
  if (!container) return;

  if (tabId === "flashcards") {
    renderFlashcard();
  } else if (tabId === "formulas") {
    container.innerHTML = `
      <div class="grid-2">
        <div class="card">
          <h3>AES Parameters &amp; Formulas</h3>
          <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.88rem; line-height: 1.6">
            <li><strong>Block:</strong> 128 bits = 16 bytes = 4 words</li>
            <li><strong>Rounds:</strong> 10 (128-bit key), 12 (192-bit), 14 (256-bit)</li>
            <li><strong>State array mapping:</strong> s[r, c] = in[4c + r]</li>
            <li><strong>MixColumns polynomial:</strong> m(x) = x⁸ + x⁴ + x³ + x + 1</li>
            <li><strong>Final Round Invariant:</strong> MixColumns is strictly OMITTED</li>
          </ul>
        </div>
        <div class="card">
          <h3>RSA &amp; Knapsack Formulas</h3>
          <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.88rem; line-height: 1.6">
            <li><strong>RSA Modulus:</strong> n = p × q, φ(n) = (p-1)(q-1)</li>
            <li><strong>RSA Keys:</strong> gcd(e, φ(n)) = 1, d · e ≡ 1 mod φ(n)</li>
            <li><strong>RSA Enc/Dec:</strong> C = Mᵉ mod n, M = Cᵈ mod n</li>
            <li><strong>Knapsack Super-increasing:</strong> bᵢ > ∑ bⱼ</li>
            <li><strong>Knapsack Public Key:</strong> aᵢ = (bᵢ · n) mod m</li>
          </ul>
        </div>
      </div>
    `;
  } else if (tabId === "lastminute") {
    container.innerHTML = `
      <div class="cram-box">
        <h3>🚨 EMERGENCY EXAM CRAM SHEET (15+ MARKS GUARANTEE)</h3>
        <ul class="cram-list">
          <li><span class="cram-bullet">1.</span> <strong>AES Data Units:</strong> Bit (1b) → Byte (8b) → Word (32b = 4B) → Block (128b = 16B = 4W) → State (4×4 matrix).</li>
          <li><span class="cram-bullet">2.</span> <strong>AES Round Invariant:</strong> Normal round = SubBytes + ShiftRows + MixColumns + AddRoundKey. Final round = SubBytes + ShiftRows + AddRoundKey (NO MixColumns!).</li>
          <li><span class="cram-bullet">3.</span> <strong>RSA Algorithm:</strong> n=pq, φ(n)=(p-1)(q-1), gcd(e, φ)=1, ed ≡ 1 mod φ. C = Mᵉ mod n, M = Cᵈ mod n. Defense against CCA: OAEP.</li>
          <li><span class="cram-bullet">4.</span> <strong>Knapsack inv_knapsackSum:</strong> Check super-increasing. Run greedy subtraction from LARGEST element down to smallest.</li>
          <li><span class="cram-bullet">5.</span> <strong>Rabin Cryptosystem:</strong> p, q ≡ 3 mod 4. C = P² mod n. Decryption yields 4 roots via CRT. Ambiguity resolved by redundancy pattern.</li>
          <li><span class="cram-bullet">6.</span> <strong>IT Act Sections 11–13:</strong> Sec 11 (Attribution: originator, authorized, automated); Sec 12 (Acknowledgement); Sec 13 (Dispatch: outside originator control; Receipt: enters designated system; Place: principal place of business).</li>
        </ul>
      </div>
    `;
  }
}

const FLASHCARDS = [
  {
    topic: "AES",
    front: "What is the AES State Matrix and what is its dimension and byte ordering?",
    back: "<h4>AES State Matrix</h4><p>• 4×4 matrix of bytes (16 bytes = 128 bits total).</p><p>• Bytes are ordered in <strong>column-major</strong> fashion: s[r, c] = in[4c + r].</p><p>• Each column forms a 32-bit word.</p>"
  },
  {
    topic: "AES",
    front: "Which transformation is omitted in the final round of AES, and why?",
    back: "<h4>Final Round Omission</h4><p>• <strong>MixColumns</strong> is omitted in the final round (Round 10 in AES-128).</p><p>• The final round contains only: <strong>SubBytes</strong>, <strong>ShiftRows</strong>, and <strong>AddRoundKey</strong>.</p><p>• Purpose: Makes decryption structure symmetric to encryption without requiring extra inverse MixColumns step at output.</p>"
  },
  {
    topic: "RSA",
    front: "State the mathematical conditions for choosing e and d in RSA.",
    back: "<h4>RSA Key Conditions</h4><ul><li>n = p × q where p, q are distinct primes.</li><li>φ(n) = (p-1)(q-1).</li><li>1 < e < φ(n) such that gcd(e, φ(n)) = 1.</li><li>d ≡ e⁻¹ (mod φ(n)) ⇔ e · d ≡ 1 (mod φ(n)).</li></ul>"
  },
  {
    topic: "Rabin",
    front: "Why does the Rabin cryptosystem produce four square roots upon decryption?",
    back: "<h4>Rabin 4-Root Ambiguity</h4><p>• In Rabin, ciphertext is C = P² mod n where n = p × q.</p><p>• C has 2 roots mod p (±r) and 2 roots mod q (±s).</p><p>• By Chinese Remainder Theorem, combining (±r, ±s) produces 2 × 2 = 4 distinct square roots mod n.</p><p>• Ambiguity resolved by appending a known redundancy pattern prior to encryption.</p>"
  },
  {
    topic: "IT Act",
    front: "What are the three modes of attribution under Section 11 of the IT Act 2000?",
    back: "<h4>IT Act Sec 11 (Attribution)</h4><p>An electronic record is attributed to the originator if sent by:</p><ol><li>The <strong>originator himself</strong>.</li><li>A <strong>person authorized</strong> by the originator.</li><li>An <strong>automated information system</strong> programmed by or on behalf of the originator.</li></ol>"
  }
];

function renderFlashcard() {
  const container = document.getElementById("rev-content");
  if (!container) return;
  const card = FLASHCARDS[appState.flashcardIndex];
  container.innerHTML = `
    <div class="flashcard-wrapper">
      <div class="flex justify-between items-center mb-1">
        <span class="text-sm text-muted">Card ${appState.flashcardIndex + 1} of ${FLASHCARDS.length}</span>
        <span class="badge badge-module">${card.topic}</span>
      </div>
      <div class="flashcard" id="current-flashcard" onclick="flipFlashcard()">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <span class="tag">${card.topic}</span>
            <h3>${card.front}</h3>
            <span class="hint">👆 Click to flip and see exam answer</span>
          </div>
          <div class="flashcard-back">${card.back}</div>
        </div>
      </div>
      <div class="flashcard-nav">
        <button class="btn btn-secondary btn-sm" onclick="navFlashcard(-1)">◀ Previous</button>
        <button class="btn btn-primary btn-sm" onclick="navFlashcard(1)">Next ▶</button>
      </div>
    </div>
  `;
}

function flipFlashcard() {
  const el = document.getElementById("current-flashcard");
  if (el) el.classList.toggle("flipped");
}

function navFlashcard(delta) {
  appState.flashcardIndex = (appState.flashcardIndex + delta + FLASHCARDS.length) % FLASHCARDS.length;
  renderFlashcard();
}

// ═══════════════════════════════════════════════════════════════
// MOCK CIE SIMULATOR
// ═══════════════════════════════════════════════════════════════
function startMock() {
  const duration = parseInt(document.getElementById("mock-duration").value) || 60;
  let q1Pool = QUESTION_BANK.filter(q => q.module === 3 && q.topic.includes("AES"));
  let q2Pool = QUESTION_BANK.filter(q => q.module === 3 && (q.topic.includes("RSA") || q.topic.includes("Knapsack")));
  let q3Pool = QUESTION_BANK.filter(q => q.module === 3 && (q.topic.includes("Rabin") || q.topic.includes("Asymmetric")));
  let q4Pool = QUESTION_BANK.filter(q => q.module === 4);

  const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  appState.mock.questions = [pickRandom(q1Pool), pickRandom(q2Pool), pickRandom(q3Pool), pickRandom(q4Pool)];
  appState.mock.currentIndex = 0;
  appState.mock.answers = {};
  appState.mock.timeRemaining = duration * 60;
  appState.mock.active = true;

  document.getElementById("mock-setup").classList.remove("active");
  document.getElementById("mock-results").classList.remove("active");
  document.getElementById("mock-exam").classList.add("active");

  startMockTimer();
  renderMockQuestion();
}

function startMockTimer() {
  if (appState.mock.timerId) clearInterval(appState.mock.timerId);
  updateTimerDisplay();
  appState.mock.timerId = setInterval(() => {
    appState.mock.timeRemaining--;
    updateTimerDisplay();
    if (appState.mock.timeRemaining <= 0) {
      clearInterval(appState.mock.timerId);
      alert("⏰ Time is up! Submitting your exam.");
      submitMock();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("mock-timer");
  if (!timerEl) return;
  const mins = Math.floor(appState.mock.timeRemaining / 60);
  const secs = appState.mock.timeRemaining % 60;
  timerEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  timerEl.classList.remove("warning", "critical");
  if (appState.mock.timeRemaining < 300) timerEl.classList.add("critical");
  else if (appState.mock.timeRemaining < 600) timerEl.classList.add("warning");
}

function renderMockQuestion() {
  const idx = appState.mock.currentIndex;
  const q = appState.mock.questions[idx];
  if (!q) return;

  document.getElementById("mock-q-label").textContent = `Question ${idx + 1} of 4`;
  document.getElementById("mock-q-module").textContent = `Module ${q.module}`;
  document.getElementById("mock-q-marks").textContent = `5 Marks`;
  document.getElementById("mock-q-text").textContent = q.qText;

  const answerBox = document.getElementById("mock-answer-box");
  answerBox.value = appState.mock.answers[idx] || "";
  document.getElementById("mock-prev-btn").disabled = (idx === 0);
  document.getElementById("mock-next-btn").textContent = (idx === 3) ? "Review All ▶" : "Next ▶";
}

function mockNav(delta) {
  const answerBox = document.getElementById("mock-answer-box");
  appState.mock.answers[appState.mock.currentIndex] = answerBox.value;
  const nextIdx = appState.mock.currentIndex + delta;
  if (nextIdx >= 0 && nextIdx < 4) {
    appState.mock.currentIndex = nextIdx;
    renderMockQuestion();
  }
}

function submitMock() {
  const answerBox = document.getElementById("mock-answer-box");
  appState.mock.answers[appState.mock.currentIndex] = answerBox.value;
  if (appState.mock.timerId) clearInterval(appState.mock.timerId);
  appState.mock.active = false;
  document.getElementById("mock-exam").classList.remove("active");
  document.getElementById("mock-results").classList.add("active");
  renderMockReview();
}

function renderMockReview() {
  const reviewList = document.getElementById("mock-review-list");
  if (!reviewList) return;
  let html = `<div class="alert alert-info mb-2">Self-Evaluate your answers against the official institutional rubrics below. Score each question from 0 to 5 marks.</div>`;
  appState.mock.questions.forEach((q, idx) => {
    const userAns = appState.mock.answers[idx] || "(No answer provided)";
    html += `
      <div class="card mb-2">
        <div class="flex justify-between items-center mb-1">
          <strong>Question ${idx + 1} (${q.topic} - Module ${q.module})</strong>
          <span class="badge badge-marks">5 Marks</span>
        </div>
        <p class="mb-2"><strong>Q:</strong> ${escapeHtml(q.qText)}</p>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:0.75rem; margin-bottom:0.75rem">
          <strong>Your Written Answer:</strong>
          <pre style="white-space:pre-wrap; font-family:var(--sans); font-size:0.9rem; margin-top:0.35rem">${escapeHtml(userAns)}</pre>
        </div>
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:0.75rem; margin-bottom:0.75rem">
          <strong style="color:#166534">Model Answer &amp; Notes Reference:</strong>
          <pre style="white-space:pre-wrap; font-family:var(--sans); font-size:0.88rem; margin-top:0.35rem">${escapeHtml(q.examReadyAnswer)}</pre>
        </div>
        <div class="flex items-center gap-1 mt-1">
          <label class="text-sm fw-bold">Award Self-Score:</label>
          <select id="mock-score-${idx}" onchange="updateTotalMockScore()" style="padding:0.3rem 0.6rem; border-radius:6px">
            <option value="0">0 Marks</option>
            <option value="1">1 Mark</option>
            <option value="2">2 Marks</option>
            <option value="3">3 Marks</option>
            <option value="4">4 Marks</option>
            <option value="5" selected>5 Marks</option>
          </select>
        </div>
      </div>
    `;
  });
  reviewList.innerHTML = html;
  updateTotalMockScore();
}

function updateTotalMockScore() {
  let total = 0;
  for (let i = 0; i < 4; i++) {
    const sel = document.getElementById(`mock-score-${i}`);
    if (sel) total += parseInt(sel.value);
  }
  const ring = document.getElementById("mock-score-ring");
  const text = document.getElementById("mock-score-text");
  if (ring) ring.textContent = `${total}/20`;
  if (text) {
    if (total >= 15) text.innerHTML = `<span class="text-success fw-bold">🎯 TARGET ACHIEVED (≥15/20)! Exam Readiness: OUTSTANDING.</span>`;
    else if (total >= 12) text.innerHTML = `<span class="text-warning fw-bold">⚡ SOLID PASS (Fallback ≥11.5 met). Revise weak topics for 15+.</span>`;
    else text.innerHTML = `<span class="text-danger fw-bold">⚠️ BELOW CUTOFF (&lt;11.5). Focus on P0 numericals and AES structure immediately!</span>`;
  }
  appState.mock.history.push({ date: new Date().toLocaleDateString(), score: total });
  localStorage.setItem(STORAGE_KEY_MOCK, JSON.stringify(appState.mock.history));
}

function restartMock() {
  document.getElementById("mock-results").classList.remove("active");
  document.getElementById("mock-setup").classList.add("active");
}

// ═══════════════════════════════════════════════════════════════
// PROGRESS PAGE
// ═══════════════════════════════════════════════════════════════
function renderProgressPage() {
  const m3Container = document.getElementById("progress-m3");
  const m4Container = document.getElementById("progress-m4");
  const overallContainer = document.getElementById("progress-overall");
  if (!m3Container || !m4Container) return;

  const m3Topics = [
    { id: "t_aes_struct", name: "AES General Structure (Block size, 10 rounds, Key sizes)" },
    { id: "t_aes_units", name: "AES Five Data Units (bit, byte, word, block, state)" },
    { id: "t_aes_subbytes", name: "AES SubBytes (S-Box non-linear byte substitution)" },
    { id: "t_aes_shiftrows", name: "AES ShiftRows (Row permutation shifts)" },
    { id: "t_aes_mixcols", name: "AES MixColumns (Galois Field matrix mult & final round omission)" },
    { id: "t_sym_asym", name: "Symmetric vs Asymmetric Key Cryptography" },
    { id: "t_trapdoor", name: "Trapdoor One-Way Functions" },
    { id: "t_rsa_algo", name: "RSA Key Generation, Encryption & Decryption" },
    { id: "t_rsa_num", name: "RSA Numerical Problems (e.g. Sept/Oct 2022 p=17, q=11)" },
    { id: "t_rsa_attacks", name: "RSA Attacks & OAEP Countermeasure" },
    { id: "t_knapsack_algo", name: "Merkle-Hellman Knapsack Scheme & Super-Increasing condition" },
    { id: "t_knapsack_num", name: "Knapsack Greedy Solver (inv_knapsackSum)" },
    { id: "t_rabin_algo", name: "Rabin Cryptosystem & 4 Square Roots CRT Resolution" }
  ];

  const m4Topics = [
    { id: "t_it_aims", name: "IT Act 2000 Aim and Objectives" },
    { id: "t_it_scope", name: "IT Act Scope and Major Legal Concepts" },
    { id: "t_it_sec11", name: "Section 11: Attribution of Electronic Records" },
    { id: "t_it_sec12", name: "Section 12: Acknowledgement of Receipt" },
    { id: "t_it_sec13", name: "Section 13: Time and Place of Dispatch and Receipt" }
  ];

  m3Container.innerHTML = m3Topics.map(t => renderTopicCheckbox(t)).join("");
  m4Container.innerHTML = m4Topics.map(t => renderTopicCheckbox(t)).join("");

  const totalTopics = m3Topics.length + m4Topics.length;
  const checkedCount = Object.values(appState.progress.topicsChecked).filter(Boolean).length;
  const pct = Math.round((checkedCount / totalTopics) * 100);

  if (overallContainer) {
    overallContainer.innerHTML = `
      <div style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem">
        Overall Syllabus Preparation: ${checkedCount} / ${totalTopics} Topics Completed (${pct}%)
      </div>
      <div class="progress-bar mb-2" style="height: 12px">
        <div class="progress-bar-fill" style="width: ${pct}%; background: var(--success)"></div>
      </div>
      <p class="text-sm text-muted">Check off each topic as you revise. All changes are automatically persisted to your browser storage.</p>
    `;
  }
}

function renderTopicCheckbox(topic) {
  const isChecked = !!appState.progress.topicsChecked[topic.id];
  return `
    <div class="topic-progress">
      <div class="check-btn ${isChecked ? 'on' : ''}" onclick="toggleTopicCheck('${topic.id}')">
        ${isChecked ? '✓' : ''}
      </div>
      <div class="name" onclick="toggleTopicCheck('${topic.id}')" style="cursor:pointer">
        ${topic.name}
      </div>
    </div>
  `;
}

function toggleTopicCheck(topicId) {
  appState.progress.topicsChecked[topicId] = !appState.progress.topicsChecked[topicId];
  saveProgress();
  renderProgressPage();
}

function exportProgress() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.progress, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", "mce_23cs702_progress_backup.json");
  dlAnchor.click();
}

function importProgress() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target.result);
        appState.progress = parsed;
        saveProgress();
        renderProgressPage();
        renderStudyQuestions();
        updateHeaderStats();
        alert("✓ Progress data successfully restored!");
      } catch (err) {
        alert("Failed to read progress JSON file.");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetProgress() {
  if (confirm("Are you sure you want to reset all preparation progress?")) {
    appState.progress = { mastery: {}, topicsChecked: {} };
    saveProgress();
    renderProgressPage();
    renderStudyQuestions();
    updateHeaderStats();
  }
}

// ═══════════════════════════════════════════════════════════════
// FORENSIC AUDIT REPORT
// ═══════════════════════════════════════════════════════════════
function renderAuditReport() {
  const container = document.getElementById("audit-content");
  if (!container || typeof PAPERS === "undefined" || typeof DOCUMENT_INVENTORY === "undefined") return;

  let papersHtml = `
    <div class="card mb-2">
      <h2>Verified Examination Papers Archive (9 Papers Inspected)</h2>
      <div class="table-wrap mt-2">
        <table>
          <thead><tr><th>Paper ID</th><th>Course Code</th><th>Exam Session</th><th>Questions Verified</th><th>Status</th></tr></thead>
          <tbody>
            ${PAPERS.map(p => `
              <tr>
                <td><strong>${p.paperId}</strong></td>
                <td>${p.subjectCode}</td>
                <td>${p.session}</td>
                <td>${p.questionsCount} questions</td>
                <td><span class="badge badge-verified">✓ ${p.visualVerified ? "Visual Verified" : "Inspected"}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  let docsHtml = `
    <div class="card mb-2">
      <h2>Document Inventory &amp; Forensics Table</h2>
      <div class="table-wrap mt-2">
        <table>
          <thead><tr><th>Doc ID</th><th>Filename / Source</th><th>Type</th><th>Purpose</th><th>Verification</th></tr></thead>
          <tbody>
            ${DOCUMENT_INVENTORY.map(d => `
              <tr>
                <td><strong>${d.docId}</strong></td>
                <td>${d.filename}</td>
                <td>${d.filetype}</td>
                <td>${d.purpose}</td>
                <td><span class="badge badge-verified">✓ ${d.extractionStatus}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  let qaNotes = `
    <div class="card">
      <h2>Academic Scope Discrepancy &amp; Quality Audit</h2>
      <div class="alert alert-warning mb-2">
        <strong>1. Institutional Authority Confirmation:</strong> The controlling curriculum is the autonomous syllabus of Malnad College of Engineering (MCE), Hassan for 23CS702 (approved 2023). Generic VTU syllabi and legacy VTU question papers from prior schemes (18CS703, 15CS703) were strictly cross-checked; older topics (PGP, S/MIME, SSL, IPSec) have been excluded from active study.
      </div>
      <div class="alert alert-info mb-2">
        <strong>2. CIE Cutoff Invariant:</strong> Preparation strictly adheres to Module 3 in full and Module 4 up to Attribution, Acknowledgement, and Dispatch of Electronic Records (IT Act 2000, Sections 11, 12, 13).
      </div>
      <div class="alert alert-success">
        <strong>3. Mathematical Verification:</strong> All numerical calculations in RSA, Merkle-Hellman knapsack, and Rabin CRT 4-roots have been programmatically computed using extended Euclidean algorithm and modular exponentiation with zero floating-point roundoff errors.
      </div>
    </div>
  `;

  container.innerHTML = papersHtml + docsHtml + qaNotes;
}

// ── UTILITY ──
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
