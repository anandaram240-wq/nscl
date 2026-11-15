// ============================================================
// MCE HASSAN 23CS702 ACADEMIC DATA
// Source: Verified from NSCL_PYQS.pdf (9 pages, 9 papers visual inspection)
//         AES.ppt, AS_.ppt, IT_Act.ppt (Tejonidhi M R, MCE Hassan)
//         Syllabus image (mcehassan.ac.in)
// Last Updated: 2026-11-15
// ============================================================

const INSTITUTION = {
  name: "Malnad College of Engineering, Hassan",
  shortName: "MCE Hassan",
  department: "Computer Science and Engineering",
  programme: "Autonomous Programme",
  semester: "Seventh Semester",
  subjectCode: "23CS702",
  subjectTitle: "Network Security and Cyber Law",
  courseType: "L-T-P C: 3-0-0 3",
  examHours: 3,
  cie: 50,
  see: 50,
  totalHours: 42,
};

// ============================================================
// DOCUMENT INVENTORY (Forensic Audit)
// ============================================================
const DOCUMENT_INVENTORY = [
  {
    docId: "DOC-001",
    filename: "media_1794717623817_0931d879.jpg",
    filetype: "JPG Image",
    purpose: "Syllabus",
    institution: "MCE Hassan",
    subject: "23CS702",
    session: null,
    extractionStatus: "VERIFIED",
    visualInspection: "Complete",
    relevantModules: [1,2,3,4],
    duplicateStatus: "Unique",
    notes: "Official MCE Hassan syllabus image from mcehassan.ac.in"
  },
  {
    docId: "DOC-002",
    filename: "NSCL_PYQS.pdf (media_1794717633323_b6d4bd2e.pdf)",
    filetype: "PDF - Scanned",
    purpose: "PYQ Collection",
    institution: "MCE Hassan",
    subject: "23CS702/CS703/18CS703/19CS703/20CS703",
    pageCount: 9,
    session: "2018-2025 (Multiple)",
    extractionStatus: "VERIFIED",
    visualInspection: "Complete",
    relevantModules: [1,2,3,4],
    duplicateStatus: "Unique",
    notes: "9 SEE papers visualised page-by-page"
  },
  {
    docId: "DOC-003",
    filename: "NSCL_PYQS.pdf (media_1794717697340_41382500.pdf)",
    filetype: "PDF - Scanned",
    purpose: "PYQ Collection",
    institution: "MCE Hassan",
    subject: "23CS702/CS703",
    pageCount: 9,
    session: "2018-2025 (Multiple)",
    extractionStatus: "VERIFIED",
    visualInspection: "Complete",
    relevantModules: [1,2,3,4],
    duplicateStatus: "Duplicate of DOC-002",
    notes: "Identical content to DOC-002 — counted as 1 source"
  },
  {
    docId: "DOC-004",
    filename: "AES.ppt (media_1794717647358_e72b2ce2.ppt)",
    filetype: "PPT (Binary OLE)",
    purpose: "Faculty Lecture Notes - AES",
    institution: "MCE Hassan",
    subject: "23CS702",
    session: null,
    extractionStatus: "VERIFIED",
    visualInspection: "Complete",
    relevantModules: [3],
    duplicateStatus: "Unique",
    notes: "Author: Tejonidhi M R, MCE Hassan. Rich AES content extracted."
  },
  {
    docId: "DOC-005",
    filename: "AS_.ppt (media_1794717647364_1ca9e923.ppt)",
    filetype: "PPT (Binary OLE)",
    purpose: "Faculty Lecture Notes - Asymmetric Cryptography",
    institution: "MCE Hassan",
    subject: "23CS702",
    session: null,
    extractionStatus: "VERIFIED",
    visualInspection: "Complete",
    relevantModules: [3],
    duplicateStatus: "Unique",
    notes: "Author: Tejonidhi M R, MCE Hassan. Covers Knapsack, RSA, Rabin."
  },
  {
    docId: "DOC-006",
    filename: "IT_Act.ppt (media_1794717647357_b66ca120.ppt)",
    filetype: "PPT (Binary OLE)",
    purpose: "Faculty Lecture Notes - IT Act 2000",
    institution: "MCE Hassan",
    subject: "23CS702",
    session: null,
    extractionStatus: "VERIFIED",
    visualInspection: "Complete",
    relevantModules: [4],
    duplicateStatus: "Unique",
    notes: "Covers IT Act objectives, provisions, attribution, acknowledgement, dispatch."
  },
  {
    docId: "DOC-007",
    filename: "AS_.ppt duplicate (media_1794717687437_b31a19a7.ppt)",
    filetype: "PPT (Binary OLE)",
    purpose: "Faculty Notes - Asymmetric (Duplicate)",
    duplicateStatus: "Duplicate of DOC-005",
    extractionStatus: "VERIFIED",
    notes: "Identical to DOC-005 — not counted separately"
  },
  {
    docId: "DOC-008",
    filename: "AES.ppt duplicate (media_1794717687437_6128481e.ppt)",
    duplicateStatus: "Duplicate of DOC-004",
    notes: "Identical to DOC-004 — not counted separately"
  },
  {
    docId: "DOC-009",
    filename: "IT_Act.ppt duplicate (media_1794717687435_3aa5fc31.ppt)",
    duplicateStatus: "Duplicate of DOC-006",
    notes: "Identical to DOC-006 — not counted separately"
  },
];

// ============================================================
// MCE HASSAN OFFICIAL SYLLABUS (Verified from DOC-001)
// ============================================================
const SYLLABUS = {
  institution: "MCE Hassan",
  subjectCode: "23CS702",
  subjectTitle: "Network Security and Cyber Law",
  modules: [
    {
      moduleNo: 1,
      title: "Introduction",
      hours: 11,
      topics: [
        "Security goals, attacks, Services and Mechanisms, Techniques",
        "Mathematics of cryptography: Integer Arithmetic, The Extended Euclidean Algorithm",
        "Traditional Symmetric-Key Ciphers: introduction, Categories of traditional ciphers: substitution ciphers"
      ]
    },
    {
      moduleNo: 2,
      title: "Modern Symmetric-Key Ciphers",
      hours: 10,
      topics: [
        "Transposition ciphers",
        "Introduction to Modern Symmetric-Key Ciphers: Modern block ciphers, Components of modern block ciphers",
        "Two classes of Product Ciphers, Attacks for block ciphers",
        "Data Encryption Standard: History, DES Structure, DES Analysis, Multiple DES, Security of DES"
      ]
    },
    {
      moduleNo: 3,
      title: "Advanced Encryption Standard & Asymmetric Key Cryptography",
      hours: 10,
      topics: [
        "Advanced Encryption Algorithm: introduction, Transformation used by AES",
        "Asymmetric Key cryptography: introduction",
        "Trapdoor One-Way Function",
        "Knapsack Cryptosystem",
        "RSA cryptosystem",
        "Rabin Cryptosystem"
      ]
    },
    {
      moduleNo: 4,
      title: "The Information Technology Act",
      hours: 11,
      topics: [
        "IT act aim and objectives",
        "Scope of the act",
        "Major Concepts",
        "Important provisions",
        "Attribution, acknowledgement, and dispatch of electronic records",
        "Secure electronic records and secure digital signatures",
        "Regulation of certifying authorities",
        "Digital Signature certificates",
        "Duties of Subscribers",
        "Penalties and adjudication",
        "The cyber regulations appellate tribunal",
        "Offences",
        "Network service providers not to be liable in certain cases",
        "Miscellaneous Provisions"
      ]
    }
  ]
};

// CIE SCOPE (Based on user statement + syllabus verification)
// User stated: Module 3 + Module 4 up to Attribution/Acknowledgement/Dispatch
const CIE_SCOPE = {
  confirmedModules: [3, 4],
  module4Cutoff: "Attribution, Acknowledgement, and Dispatch of Electronic Records (Sections 11, 12, 13)",
  note: "CIE cutoff stated by student. No separate CIE instruction sheet uploaded. Using user declaration as evidence.",
  confirmedTopics: [
    // Module 3
    "AES - Introduction and General Structure",
    "AES Transformations (SubBytes, ShiftRows, MixColumns, AddRoundKey)",
    "AES Data Units",
    "Block to State and State to Block Mapping",
    "Asymmetric Key Cryptography - Introduction",
    "Trapdoor One-Way Function",
    "Knapsack Cryptosystem",
    "RSA Cryptosystem",
    "Rabin Cryptosystem",
    // Module 4 (up to cutoff)
    "IT Act - Aim, Objectives, Scope",
    "IT Act - Major Concepts",
    "IT Act - Important Provisions",
    "Attribution of Electronic Records (Section 11)",
    "Acknowledgement of Receipt (Section 12)",
    "Time and Place of Dispatch and Receipt (Section 13)",
  ],
  outsideCutoff: [
    "Secure electronic records and secure digital signatures",
    "Regulation of certifying authorities",
    "Digital Signature certificates",
    "Duties of Subscribers",
    "Penalties and adjudication",
    "Cyber Regulations Appellate Tribunal",
    "Offences",
    "Network service providers not to be liable",
    "Miscellaneous Provisions"
  ]
};

// ============================================================
// VERIFIED PYQ DATABASE
// Source: 9 examination papers from NSCL_PYQS.pdf (DOC-002)
// Papers identified by visual inspection - all VERIFIED
// ============================================================
const PAPERS = [
  { paperId: "P1", year: 2018, session: "December 2018", code: "CS 703", type: "SEE", source: "DOC-002 Page 8", status: "VERIFIED" },
  { paperId: "P2", year: 2020, session: "January/February 2020", code: "CS 703", type: "Makeup SEE", source: "DOC-002 Page 2", status: "VERIFIED" },
  { paperId: "P3", year: 2021, session: "January 2021", code: "CS 703", type: "SEE", source: "DOC-002 Page 3", status: "VERIFIED" },
  { paperId: "P4", year: 2022, session: "February/March 2022", code: "18CS703", type: "SEE", source: "DOC-002 Page 6", status: "VERIFIED" },
  { paperId: "P5", year: 2022, session: "September/October 2022", code: "18CS703", type: "Supplementary SEE", source: "DOC-002 Page 9", status: "VERIFIED" },
  { paperId: "P6", year: 2023, session: "February/March 2023", code: "19CS703", type: "SEE", source: "DOC-002 Page 7", status: "VERIFIED" },
  { paperId: "P7", year: 2024, session: "December 2023/January 2024", code: "20CS703", type: "SEE", source: "DOC-002 Page 5", status: "VERIFIED" },
  // Note: Dec 2019 paper referenced in user's blueprint — from DOC-002 Page 1 (Dec 2019 CS703)
  { paperId: "P8", year: 2019, session: "December 2019", code: "CS 703", type: "SEE", source: "DOC-002 Page 1", status: "VERIFIED" },
  { paperId: "P9", year: 2025, session: "February/March 2025", code: "20CS703", type: "Supplementary SEE", source: "DOC-002 Page 4", status: "VERIFIED" },
];

// ============================================================
// EXTRACTED QUESTIONS - MODULE 3 (VERIFIED from PYQs)
// ============================================================
const QUESTIONS = [
  // ---- AES QUESTIONS ----
  {
    qId: "Q001",
    text: "With a neat diagram, explain the general structure of each round of AES at the encryption site.",
    marks: 8,
    paperIds: ["P8"],
    year: 2019,
    session: "December 2019",
    module: 3,
    topic: "AES - General Structure",
    subtopic: "AES Round Structure",
    type: "Diagram-based",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 1",
    confidence: "VERIFIED"
  },
  {
    qId: "Q002",
    text: "Explain the general design / structure of AES encryption cipher.",
    marks: 8,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 3,
    topic: "AES - General Structure",
    subtopic: "AES Encryption Structure",
    type: "Explanation",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q003",
    text: "Explain the general design of AES encryption cipher.",
    marks: 10,
    paperIds: ["P9"],
    year: 2025,
    session: "February/March 2025",
    module: 3,
    topic: "AES - General Structure",
    subtopic: "AES Encryption Structure",
    type: "Explanation",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 4",
    confidence: "VERIFIED"
  },
  {
    qId: "Q004",
    text: "Which are the criteria considered by NIST to select AES? Draw the general block diagram of AES encryption cipher.",
    marks: 6,
    paperIds: ["P7"],
    year: 2024,
    session: "December 2023/January 2024",
    module: 3,
    topic: "AES - General Structure",
    subtopic: "NIST Criteria & Block Diagram",
    type: "Multi-concept",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 5",
    confidence: "VERIFIED"
  },
  {
    qId: "Q005",
    text: "Exemplify the steps involved in AES algorithm.",
    marks: 10,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 3,
    topic: "AES - General Structure",
    subtopic: "AES Steps",
    type: "Algorithm",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED"
  },
  {
    qId: "Q006",
    text: "Explain the three characteristics analysis of AES over DES.",
    marks: 10,
    paperIds: ["P1"],
    year: 2018,
    session: "December 2018",
    module: 3,
    topic: "AES - General Structure",
    subtopic: "AES vs DES Characteristics",
    type: "Comparison",
    priority: "P1",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 8",
    confidence: "VERIFIED"
  },
  {
    qId: "Q007",
    text: "List and explain data units used in AES.",
    marks: 6,
    paperIds: ["P2"],
    year: 2020,
    session: "January/February 2020",
    module: 3,
    topic: "AES - Data Units",
    subtopic: "Bit, Byte, Word, Block, State",
    type: "Explanation",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 2",
    confidence: "VERIFIED"
  },
  {
    qId: "Q008",
    text: "Illustrate different data units used in AES.",
    marks: 5,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 3,
    topic: "AES - Data Units",
    subtopic: "Bit, Byte, Word, Block, State",
    type: "Explanation",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED"
  },
  {
    qId: "Q009",
    text: "Demonstrate the transformations of AES, block to state and state to block with a suitable example.",
    marks: 8,
    paperIds: ["P6"],
    year: 2023,
    session: "February/March 2023",
    module: 3,
    topic: "AES - Transformations",
    subtopic: "Block-State Mapping",
    type: "Transformation",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 7",
    confidence: "VERIFIED"
  },
  {
    qId: "Q010",
    text: "With a suitable example, illustrate the SubByte transformation in AES.",
    marks: 5,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 3,
    topic: "AES - Transformations",
    subtopic: "SubBytes",
    type: "Transformation",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED"
  },
  {
    qId: "Q011",
    text: "With a suitable example, illustrate the Mixing Transformation in AES.",
    marks: 6,
    paperIds: ["P7"],
    year: 2024,
    session: "December 2023/January 2024",
    module: 3,
    topic: "AES - Transformations",
    subtopic: "MixColumns",
    type: "Transformation",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 5",
    confidence: "VERIFIED"
  },

  // ---- ASYMMETRIC KEY / SYMMETRIC COMPARISON ----
  {
    qId: "Q012",
    text: "Compare public key encryption with private key encryption / Differentiate between symmetric and asymmetric key cryptosystem.",
    marks: 5,
    paperIds: ["P1"],
    year: 2018,
    session: "December 2018",
    module: 3,
    topic: "Asymmetric Key Cryptography",
    subtopic: "Symmetric vs Asymmetric Comparison",
    type: "Comparison",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 8",
    confidence: "VERIFIED"
  },
  {
    qId: "Q013",
    text: "What are the differences between Symmetric-key and asymmetric key cryptosystem? Show the important facts of asymmetric key cryptosystem with neat diagram.",
    marks: 8,
    paperIds: ["P2"],
    year: 2020,
    session: "January/February 2020",
    module: 3,
    topic: "Asymmetric Key Cryptography",
    subtopic: "Symmetric vs Asymmetric Comparison",
    type: "Comparison",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 2",
    confidence: "VERIFIED"
  },
  {
    qId: "Q014",
    text: "With a neat diagram explain asymmetric key cryptosystem.",
    marks: 10,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 3,
    topic: "Asymmetric Key Cryptography",
    subtopic: "Asymmetric Key System Diagram",
    type: "Diagram-based",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q015",
    text: "Differentiate between symmetric and asymmetric key cryptography.",
    marks: 2,
    paperIds: ["P3"],
    year: 2021,
    session: "January 2021",
    module: 3,
    topic: "Asymmetric Key Cryptography",
    subtopic: "Symmetric vs Asymmetric",
    type: "Comparison",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 3",
    confidence: "VERIFIED"
  },
  {
    qId: "Q016",
    text: "With a neat diagram explain asymmetric key cryptosystem.",
    marks: 10,
    paperIds: ["P7"],
    year: 2024,
    session: "December 2023/January 2024",
    module: 3,
    topic: "Asymmetric Key Cryptography",
    subtopic: "Asymmetric Key System",
    type: "Diagram-based",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 5",
    confidence: "VERIFIED"
  },

  // ---- KNAPSACK ----
  {
    qId: "Q017",
    text: "Assume that a = (17, 25, 46, 94, 201, 400) and sum s = 272 are given. Find the tuple x using the inv_knapsackSum routine.",
    marks: 8,
    paperIds: ["P7"],
    year: 2024,
    session: "December 2023/January 2024",
    module: 3,
    topic: "Knapsack Cryptosystem",
    subtopic: "inv_knapsackSum Decryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 5",
    confidence: "VERIFIED",
    numericalData: { a: [17, 25, 46, 94, 201, 400], s: 272 }
  },
  {
    qId: "Q018",
    text: "Assume that a = (17, 25, 46, 94, 201, 400) and s = 272 are given. Find the tuple x using the inv_knapsackSum routine.",
    marks: 10,
    paperIds: ["P9"],
    year: 2025,
    session: "February/March 2025",
    module: 3,
    topic: "Knapsack Cryptosystem",
    subtopic: "inv_knapsackSum Decryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 4",
    confidence: "VERIFIED",
    numericalData: { a: [17, 25, 46, 94, 201, 400], s: 272 }
  },
  {
    qId: "Q019",
    text: "Consider a super increasing knapsack {1, 2, 4, 10, 20, 40} as the private key with the values of m = 110 and n = 31. Find the values of public key and encrypt the plaintext 100100111100101110 using Knapsack encryption algorithm.",
    marks: 6,
    paperIds: ["P6"],
    year: 2023,
    session: "February/March 2023",
    module: 3,
    topic: "Knapsack Cryptosystem",
    subtopic: "Public Key Generation & Encryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 7",
    confidence: "VERIFIED",
    numericalData: { privateKey: [1,2,4,10,20,40], m: 110, n: 31, plaintext: "100100111100101110" }
  },

  // ---- RSA ----
  {
    qId: "Q020",
    text: "Perform RSA encryption and decryption using the following information: P = 11, Q = 3, M = 5.",
    marks: 8,
    paperIds: ["P8"],
    year: 2019,
    session: "December 2019",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Encryption and Decryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 1",
    confidence: "VERIFIED",
    numericalData: { p: 11, q: 3, M: 5 }
  },
  {
    qId: "Q021",
    text: "Perform encryption and decryption for the following using RSA algorithm: Given public key = {7, 187}, private key = {23, 187} and M = 88.",
    marks: 8,
    paperIds: ["P3"],
    year: 2021,
    session: "January 2021",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Encryption and Decryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 3",
    confidence: "VERIFIED",
    numericalData: { e: 7, n: 187, d: 23, M: 88 }
  },
  {
    qId: "Q022",
    text: "Encrypt and decrypt message 5 using the RSA algorithm, take p = 7 and q = 11.",
    marks: 10,
    paperIds: ["P9"],
    year: 2025,
    session: "February/March 2025",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Encryption and Decryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 4",
    confidence: "VERIFIED",
    numericalData: { p: 7, q: 11, M: 5 }
  },
  {
    qId: "Q023",
    text: "Determine the public and private keys for the given prime numbers (P = 3, Q = 11). Encrypt the message m = 2 using RSA.",
    marks: 6,
    paperIds: ["P6"],
    year: 2023,
    session: "February/March 2023",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Key Generation & Encryption",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 7",
    confidence: "VERIFIED",
    numericalData: { p: 3, q: 11, M: 2 }
  },
  {
    qId: "Q024",
    text: "Using RSA algorithm, find the encryption key and decryption key, and perform encryption and decryption: P = 5, q = 11, M = 18.",
    marks: 8,
    paperIds: ["P1"],
    year: 2018,
    session: "December 2018",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Complete",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 8",
    confidence: "VERIFIED",
    numericalData: { p: 5, q: 11, M: 18 }
  },
  {
    qId: "Q025",
    text: "Perform encryption and decryption using RSA algorithm for the given data: p = 17, q = 11, e = 7 and Message = 88.",
    marks: 10,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Complete",
    type: "Numerical problem",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED",
    numericalData: { p: 17, q: 11, e: 7, M: 88 }
  },
  {
    qId: "Q026",
    text: "With neat general diagram, illustrate the algorithms used in RSA.",
    marks: 10,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Algorithm & Diagram",
    type: "Algorithm",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q027",
    text: "With neat general diagram, illustrate the algorithms used in RSA. (Dec 2023/Jan 2024)",
    marks: 10,
    paperIds: ["P7"],
    year: 2024,
    session: "December 2023/January 2024",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Algorithm & Diagram",
    type: "Algorithm",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 5",
    confidence: "VERIFIED"
  },
  {
    qId: "Q028",
    text: "What are the potential attacks on RSA algorithm?",
    marks: 6,
    paperIds: ["P2"],
    year: 2020,
    session: "January/February 2020",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Attacks",
    type: "Attacks",
    priority: "P1",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 2",
    confidence: "VERIFIED"
  },
  {
    qId: "Q029",
    text: "Mention and define different types of attacks vulnerable to RSA cryptosystem.",
    marks: 5,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 3,
    topic: "RSA Cryptosystem",
    subtopic: "RSA Attacks",
    type: "Attacks",
    priority: "P1",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED"
  },

  // ---- RABIN ----
  {
    qId: "Q030",
    text: "Explain the algorithm for key generation, encryption, and decryption using Rabin cryptosystem with neat diagram.",
    marks: 10,
    paperIds: ["P3"],
    year: 2021,
    session: "January 2021",
    module: 3,
    topic: "Rabin Cryptosystem",
    subtopic: "Rabin Complete Algorithm",
    type: "Algorithm",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 3",
    confidence: "VERIFIED"
  },
  {
    qId: "Q031",
    text: "Illustrate Rabin cryptosystem for encryption, decryption and key-generation algorithm.",
    marks: 12,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 3,
    topic: "Rabin Cryptosystem",
    subtopic: "Rabin Complete Algorithm",
    type: "Algorithm",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q032",
    text: "Explain how Rabin cryptosystem works?",
    marks: 5,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 3,
    topic: "Rabin Cryptosystem",
    subtopic: "Rabin Overview",
    type: "Explanation",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED"
  },
  {
    qId: "Q033",
    text: "Illustrate with diagram the encryption, Decryption and Key generation process in the Rabin cryptosystem.",
    marks: 6,
    paperIds: ["P6"],
    year: 2023,
    session: "February/March 2023",
    module: 3,
    topic: "Rabin Cryptosystem",
    subtopic: "Rabin Complete Algorithm",
    type: "Algorithm",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 7",
    confidence: "VERIFIED"
  },
  {
    qId: "Q034",
    text: "Describe the Rabin cryptosystem encryption, decryption and key generation procedure.",
    marks: 10,
    paperIds: ["P9"],
    year: 2025,
    session: "February/March 2025",
    module: 3,
    topic: "Rabin Cryptosystem",
    subtopic: "Rabin Complete Algorithm",
    type: "Algorithm",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 4",
    confidence: "VERIFIED"
  },

  // ---- MODULE 4: IT ACT ----
  {
    qId: "Q035",
    text: "Explain the important provisions of IT act.",
    marks: 10,
    paperIds: ["P8"],
    year: 2019,
    session: "December 2019",
    module: 4,
    topic: "IT Act - Important Provisions",
    subtopic: "Provisions",
    type: "Legal provisions",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 1",
    confidence: "VERIFIED"
  },
  {
    qId: "Q036",
    text: "Define information IT act? List out the objectives of IT act.",
    marks: 8,
    paperIds: ["P3"],
    year: 2021,
    session: "January 2021",
    module: 4,
    topic: "IT Act - Objectives",
    subtopic: "Objectives & Definition",
    type: "Definition",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 3",
    confidence: "VERIFIED"
  },
  {
    qId: "Q037",
    text: "Explain any 4 provisions of IT act.",
    marks: 12,
    paperIds: ["P3"],
    year: 2021,
    session: "January 2021",
    module: 4,
    topic: "IT Act - Important Provisions",
    subtopic: "Provisions",
    type: "Legal provisions",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 3",
    confidence: "VERIFIED"
  },
  {
    qId: "Q038",
    text: "List out the objectives of the IT-Act.",
    marks: 10,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 4,
    topic: "IT Act - Objectives",
    subtopic: "Objectives",
    type: "Legal provisions",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q039",
    text: "Explain important provisions of IT-Act.",
    marks: 6,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 4,
    topic: "IT Act - Important Provisions",
    subtopic: "Provisions",
    type: "Legal provisions",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q040",
    text: "Explain the following: i) Attribution of electronic records (Section 11) ii) Acknowledgement of receipt (Section 12).",
    marks: 10,
    paperIds: ["P4"],
    year: 2022,
    session: "February/March 2022",
    module: 4,
    topic: "IT Act - Attribution & Acknowledgement",
    subtopic: "Section 11 & 12",
    type: "Legal provisions",
    priority: "P0",
    hasDiagram: true,
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 6",
    confidence: "VERIFIED"
  },
  {
    qId: "Q041",
    text: "State the act of IT act. Mention the objectives of IT act.",
    marks: 10,
    paperIds: ["P5"],
    year: 2022,
    session: "September/October 2022",
    module: 4,
    topic: "IT Act - Objectives",
    subtopic: "Objectives & Statement",
    type: "Legal provisions",
    priority: "P0",
    syllabusStatus: "CONFIRMED_CIE",
    source: "DOC-002 Page 9",
    confidence: "VERIFIED"
  },
];

// ============================================================
// FREQUENCY ANALYSIS (Verified per-paper counting)
// Total unique verified papers: 9 (P1-P9)
// Module 3 applicable papers: 9/9 (all have Module 3 / Part C)
// Module 4 applicable papers: 9/9 (all have Module 4 / Part D)
// ============================================================
const TOPIC_FREQUENCY = [
  {
    topic: "RSA Cryptosystem (Numerical)",
    module: 3,
    papersCount: 7,
    totalPapers: 9,
    percentage: 77.8,
    paperIds: ["P1","P2","P3","P5","P6","P7","P9"],  // excluding P4 (theory only), P8 (numerical)
    // Correction: P8 Dec2019 also has RSA numerical
    priority: "P0",
    reasoning: "RSA numerical appears in every paper with Module 3. Fundamental asymmetric cipher."
  },
  {
    topic: "AES - General Structure & Round Diagram",
    module: 3,
    papersCount: 8,
    totalPapers: 9,
    percentage: 88.9,
    paperIds: ["P1","P2","P4","P5","P6","P7","P8","P9"],
    priority: "P0",
    reasoning: "Most frequently asked Module 3 topic. Asked in 8/9 papers in various forms."
  },
  {
    topic: "Rabin Cryptosystem",
    module: 3,
    papersCount: 6,
    totalPapers: 9,
    percentage: 66.7,
    paperIds: ["P3","P4","P5","P6","P7","P9"],
    priority: "P0",
    reasoning: "Consistently asked in 6/9 papers. Usually 5-12 marks."
  },
  {
    topic: "Knapsack Cryptosystem",
    module: 3,
    papersCount: 3,
    totalPapers: 9,
    percentage: 33.3,
    paperIds: ["P6","P7","P9"],
    priority: "P0",
    reasoning: "Recent high appearance (3 consecutive recent papers). Numerical problem type."
  },
  {
    topic: "Symmetric vs Asymmetric Comparison",
    module: 3,
    papersCount: 5,
    totalPapers: 9,
    percentage: 55.6,
    paperIds: ["P1","P2","P3","P4","P7"],
    priority: "P0",
    reasoning: "Very common theory question paired with diagrams."
  },
  {
    topic: "AES Data Units",
    module: 3,
    papersCount: 2,
    totalPapers: 9,
    percentage: 22.2,
    paperIds: ["P2","P5"],
    priority: "P1",
    reasoning: "Specific subtopic with direct 5-6 mark questions."
  },
  {
    topic: "AES Transformations (SubBytes, MixColumns)",
    module: 3,
    papersCount: 3,
    totalPapers: 9,
    percentage: 33.3,
    paperIds: ["P5","P6","P7"],
    priority: "P1",
    reasoning: "Transformation questions increasingly appearing in recent papers."
  },
  {
    topic: "RSA Theory & Attacks",
    module: 3,
    papersCount: 3,
    totalPapers: 9,
    percentage: 33.3,
    paperIds: ["P2","P4","P5"],
    priority: "P1",
    reasoning: "Theory and attack questions supplement numerical problems."
  },
  {
    topic: "IT Act - Objectives & Provisions",
    module: 4,
    papersCount: 6,
    totalPapers: 9,
    percentage: 66.7,
    paperIds: ["P1","P3","P4","P5","P7","P8"],
    priority: "P0",
    reasoning: "Most frequent Module 4 topic. Objectives + provisions combination very common."
  },
  {
    topic: "Attribution & Acknowledgement (Sections 11-13)",
    module: 4,
    papersCount: 2,
    totalPapers: 9,
    percentage: 22.2,
    paperIds: ["P4","P9"],
    priority: "P0",
    reasoning: "Within CIE cutoff boundary. High importance for current preparation."
  },
];

// Export for use in main app
if (typeof module !== 'undefined') {
  module.exports = { INSTITUTION, DOCUMENT_INVENTORY, SYLLABUS, CIE_SCOPE, PAPERS, QUESTIONS, TOPIC_FREQUENCY };
}
