// ============================================================
// MCE HASSAN 23CS702 CONSOLIDATED QUESTION-FIRST REPOSITORY
// Intelligent PYQ Consolidation with OR-Based Question Grouping
// 16 Consolidated Question Groups representing 41 Historical PYQs
// Strict Diagram Freeze: Preserves all existing slide images & SVGs
// ============================================================

const CONSOLIDATED_QUESTION_GROUPS = [
  {
    "groupId": "GRP-M3-AES-01",
    "masterQuestionTitle": "Explain the general design, structure, and round workflow of the AES encryption cipher with a neat diagram.",
    "module": 3,
    "topic": "AES - General Structure",
    "subtopic": "AES Round Structure & Algorithm",
    "priority": "P0",
    "uniquePaperCount": 5,
    "totalApplicablePapers": 9,
    "frequencyPct": 55.6,
    "historicalFrequency": "5/9 unique papers (55.6%)",
    "historicalPapers": [
      "P8: Dec 2019 (8M)",
      "P4: Feb/Mar 2022 (8M)",
      "P9: Feb/Mar 2025 (10M)",
      "P7: Dec 2023/Jan 2024 (6M)",
      "P5: Sept/Oct 2022 (10M)"
    ],
    "historicalMarks": "6M, 8M, 10M",
    "variants": [
      {
        "qId": "Q001",
        "paperCode": "P8-Q001",
        "wording": "With a neat diagram, explain the general structure of each round of AES at the encryption site.",
        "session": "December 2019",
        "year": 2019,
        "marks": 8,
        "paperId": "P8",
        "pdfPage": 8,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_08.png",
        "type": "Diagram-based"
      },
      {
        "qId": "Q002",
        "paperCode": "P4-Q002",
        "wording": "Explain the general design / structure of AES encryption cipher.",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 8,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Theory & Flow"
      },
      {
        "qId": "Q003",
        "paperCode": "P9-Q003",
        "wording": "Explain the general design of AES encryption cipher.",
        "session": "February/March 2025",
        "year": 2025,
        "marks": 10,
        "paperId": "P9",
        "pdfPage": 9,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_09.png",
        "type": "Comprehensive Design"
      },
      {
        "qId": "Q004",
        "paperCode": "P7-Q004",
        "wording": "Which are the criteria considered by NIST to select AES? Draw the general block diagram of AES encryption cipher.",
        "session": "December 2023/January 2024",
        "year": 2024,
        "marks": 6,
        "paperId": "P7",
        "pdfPage": 7,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_07.png",
        "type": "NIST Criteria & Block Diagram"
      },
      {
        "qId": "Q005",
        "paperCode": "P5-Q005",
        "wording": "Exemplify the steps involved in AES algorithm.",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Step-by-step Algorithm"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/aes_slide_08_Attachment25.png",
      "source": "AES.ppt, Slide 8 (Tejonidhi M R, MCE Hassan)",
      "caption": "General design of AES encryption cipher: Pre-round AddRoundKey, 9 Normal Rounds, and Final Round omitting MixColumns."
    },
    "svgType": "aes-overview",
    "notesSource": "AES.ppt, Slides 4, 6\u201310 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 4 - Criteria considered by NIST:\n1. Security: Resistance to cryptanalysis, randomness of ciphertext.\n2. Cost: Computational efficiency, memory requirements.\n3. Implementation: Flexibility, hardware & software suitability, simplicity.\n\nSlide 6 - General Design of AES:\n- AES is a non-Feistel symmetric block cipher.\n- Plaintext block size: 128 bits (16 bytes).\n- Key size: 128, 192, or 256 bits.\n- Number of rounds:\n  * 10 rounds for 128-bit key\n  * 12 rounds for 192-bit key\n  * 14 rounds for 256-bit key\n\nSlide 8 - General Structure at Encryption Site:\n1. Pre-round Transformation:\n   - Initial AddRoundKey using round key K0.\n2. Rounds 1 to (Nr - 1) [Normal Rounds]:\n   Each normal round executes four transformations:\n   a. SubBytes (Substitution)\n   b. ShiftRows (Permutation)\n   c. MixColumns (Substitution/Mixing)\n   d. AddRoundKey (Key mixing)\n3. Final Round (Round Nr):\n   Executes ONLY THREE transformations:\n   a. SubBytes\n   b. ShiftRows\n   c. AddRoundKey (Key KNr)\n   * MixColumns transformation is MISSING / OMITTED in the final round!",
    "masterAnswer": "I. INTRODUCTION & ARCHITECTURAL SPECIFICATIONS\nAdvanced Encryption Standard (AES) is a symmetric block cipher standardized by NIST in 2001 (FIPS PUB 197). It was designed by Belgian cryptographers Joan Daemen and Vincent Rijmen (Rijndael).\nUnlike DES, AES is a NON-FEISTEL cipher that processes the entire 128-bit data block simultaneously in an algebraic State matrix during every round.\n\nKey Specifications:\n\u2022 Plaintext Block Size: 128 bits (16 bytes), treated as a 4x4 State matrix of bytes.\n\u2022 Ciphertext Block Size: 128 bits (16 bytes).\n\u2022 Supported Key Sizes & Round Counts:\n  - AES-128: 128-bit key (16 bytes, 4 words) -> 10 rounds (Nr = 10)\n  - AES-192: 192-bit key (24 bytes, 6 words) -> 12 rounds (Nr = 12)\n  - AES-256: 256-bit key (32 bytes, 8 words) -> 14 rounds (Nr = 14)\n\n--------------------------------------------------\nII. GENERAL ENCRYPTION ROUND STRUCTURE (AES-128)\nThe encryption process consists of three distinct phases:\n\n1. Pre-Round Transformation:\n   - A single transformation: AddRoundKey.\n   - The 128-bit input plaintext is mapped into the initial State matrix and bitwise XORed with the first round key K0 (words w[0..3]).\n   - State = Plaintext XOR K0.\n\n2. Rounds 1 to 9 (Normal Rounds):\n   Each normal round executes four sequential transformations in exact order:\n   a. SubBytes: A non-linear byte substitution where each byte of the State is replaced independently using an invertible 16x16 S-box constructed over GF(2^8).\n   b. ShiftRows: A transposition/permutation where the bytes in the last three rows of the State are cyclically shifted to the left (Row 0: no shift, Row 1: 1 byte left, Row 2: 2 bytes left, Row 3: 3 bytes left).\n   c. MixColumns: A linear substitution operating on columns independently; each column is multiplied by a fixed matrix in GF(2^8) modulo (x^8 + x^4 + x^3 + x + 1).\n   d. AddRoundKey: The 128-bit round key (Ki) generated by the Key Expansion algorithm is bitwise XORed with the State matrix.\n\n3. Round 10 (Final Round):\n   - Executes ONLY THREE transformations:\n     1. SubBytes\n     2. ShiftRows\n     3. AddRoundKey (using key K10)\n   - CRITICAL INVARIANT: MixColumns is OMITTED in the final round to make the encryption and decryption structures symmetrical and reduce hardware complexity.\n\n--------------------------------------------------\nIII. ADDITIONAL REQUIREMENT: NIST SELECTION CRITERIA (P7-Q004)\nWhen selecting AES to replace DES, NIST evaluated candidate ciphers on three essential criteria:\n1. Security: Resistance against all known cryptanalytic attacks (differential, linear), randomness of ciphertext, and mathematical rigor.\n2. Cost: High computational efficiency across platforms and minimal memory/code footprint for smart cards.\n3. Implementation Characteristics: Flexibility (supporting various key/block sizes), suitability for both hardware and software, and overall algorithmic simplicity.",
    "quickRevision": {
      "keyPoints": [
        "Non-Feistel cipher with 128-bit fixed block size.",
        "Rounds depend on key size: 10 rounds (128-bit), 12 rounds (192-bit), 14 rounds (256-bit).",
        "Pre-round is a single AddRoundKey using K0.",
        "Normal rounds (1 to 9) execute 4 transformations: SubBytes -> ShiftRows -> MixColumns -> AddRoundKey.",
        "Final round (Round 10) OMITS MixColumns (only SubBytes -> ShiftRows -> AddRoundKey).",
        "NIST criteria: Security, Cost, Implementation characteristics."
      ],
      "keywords": [
        "Non-Feistel",
        "128-bit block",
        "State Matrix (4x4)",
        "SubBytes",
        "ShiftRows",
        "MixColumns",
        "AddRoundKey",
        "Omission of MixColumns"
      ],
      "formulas": [
        "Nr = (KeySize / 32) + 6",
        "State = State XOR RoundKey",
        "Final Round: SubBytes -> ShiftRows -> AddRoundKey (No MixColumns)"
      ],
      "diagramElements": [
        "Plaintext 128-bit block entering 4x4 State",
        "Initial AddRoundKey with Key K0",
        "Loop for Rounds 1 to 9 with all 4 transformations",
        "Round 10 showing missing MixColumns",
        "Output Ciphertext 128-bit block"
      ],
      "examinerTraps": [
        "Never draw MixColumns in the final round (Round 10); omitting it is worth 2 marks in the rubric.",
        "Do not confuse AES with Feistel ciphers (AES is non-Feistel; entire block is transformed every round)."
      ]
    },
    "qText": "Explain the general design, structure, and round workflow of the AES encryption cipher with a neat diagram.",
    "examReadyAnswer": "I. INTRODUCTION & ARCHITECTURAL SPECIFICATIONS\nAdvanced Encryption Standard (AES) is a symmetric block cipher standardized by NIST in 2001 (FIPS PUB 197). It was designed by Belgian cryptographers Joan Daemen and Vincent Rijmen (Rijndael).\nUnlike DES, AES is a NON-FEISTEL cipher that processes the entire 128-bit data block simultaneously in an algebraic State matrix during every round.\n\nKey Specifications:\n\u2022 Plaintext Block Size: 128 bits (16 bytes), treated as a 4x4 State matrix of bytes.\n\u2022 Ciphertext Block Size: 128 bits (16 bytes).\n\u2022 Supported Key Sizes & Round Counts:\n  - AES-128: 128-bit key (16 bytes, 4 words) -> 10 rounds (Nr = 10)\n  - AES-192: 192-bit key (24 bytes, 6 words) -> 12 rounds (Nr = 12)\n  - AES-256: 256-bit key (32 bytes, 8 words) -> 14 rounds (Nr = 14)\n\n--------------------------------------------------\nII. GENERAL ENCRYPTION ROUND STRUCTURE (AES-128)\nThe encryption process consists of three distinct phases:\n\n1. Pre-Round Transformation:\n   - A single transformation: AddRoundKey.\n   - The 128-bit input plaintext is mapped into the initial State matrix and bitwise XORed with the first round key K0 (words w[0..3]).\n   - State = Plaintext XOR K0.\n\n2. Rounds 1 to 9 (Normal Rounds):\n   Each normal round executes four sequential transformations in exact order:\n   a. SubBytes: A non-linear byte substitution where each byte of the State is replaced independently using an invertible 16x16 S-box constructed over GF(2^8).\n   b. ShiftRows: A transposition/permutation where the bytes in the last three rows of the State are cyclically shifted to the left (Row 0: no shift, Row 1: 1 byte left, Row 2: 2 bytes left, Row 3: 3 bytes left).\n   c. MixColumns: A linear substitution operating on columns independently; each column is multiplied by a fixed matrix in GF(2^8) modulo (x^8 + x^4 + x^3 + x + 1).\n   d. AddRoundKey: The 128-bit round key (Ki) generated by the Key Expansion algorithm is bitwise XORed with the State matrix.\n\n3. Round 10 (Final Round):\n   - Executes ONLY THREE transformations:\n     1. SubBytes\n     2. ShiftRows\n     3. AddRoundKey (using key K10)\n   - CRITICAL INVARIANT: MixColumns is OMITTED in the final round to make the encryption and decryption structures symmetrical and reduce hardware complexity.\n\n--------------------------------------------------\nIII. ADDITIONAL REQUIREMENT: NIST SELECTION CRITERIA (P7-Q004)\nWhen selecting AES to replace DES, NIST evaluated candidate ciphers on three essential criteria:\n1. Security: Resistance against all known cryptanalytic attacks (differential, linear), randomness of ciphertext, and mathematical rigor.\n2. Cost: High computational efficiency across platforms and minimal memory/code footprint for smart cards.\n3. Implementation Characteristics: Flexibility (supporting various key/block sizes), suitability for both hardware and software, and overall algorithmic simplicity."
  },
  {
    "groupId": "GRP-M3-AES-02",
    "masterQuestionTitle": "Explain the three characteristics analysis of AES over DES.",
    "module": 3,
    "topic": "AES - General Structure",
    "subtopic": "AES vs DES Characteristics",
    "priority": "P1",
    "uniquePaperCount": 1,
    "totalApplicablePapers": 9,
    "frequencyPct": 11.1,
    "historicalFrequency": "1/9 unique papers (11.1%)",
    "historicalPapers": [
      "P1: Dec 2018 (10M)"
    ],
    "historicalMarks": "10M",
    "variants": [
      {
        "qId": "Q006",
        "paperCode": "P1-Q006",
        "wording": "Explain the three characteristics analysis of AES over DES.",
        "session": "December 2018",
        "year": 2018,
        "marks": 10,
        "paperId": "P1",
        "pdfPage": 1,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_01.png",
        "type": "Comparative Analysis"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/AES_img_00.png",
      "source": "AES.ppt, Slide 5 (Tejonidhi M R, MCE Hassan)",
      "caption": "NIST evaluation criteria: Security, Cost, and Implementation characteristics."
    },
    "svgType": "aes-overview",
    "notesSource": "AES.ppt, Slide 5 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 5 - Evaluation Criteria for AES over DES:\n1. Security:\n   - Resistance to cryptanalysis compared to DES (DES has weak 56-bit key susceptible to brute force).\n   - Practical and theoretical security against differential and linear cryptanalysis.\n   - Randomness of output ciphertext.\n2. Cost:\n   - Computational efficiency: High execution speed across diverse architectures.\n   - Memory requirements: Small RAM and ROM footprint suitable for resource-constrained smart cards.\n3. Implementation Characteristics:\n   - Flexibility: Support for key sizes of 128, 192, and 256 bits (DES restricted to 56 bits).\n   - Hardware and software suitability: Non-Feistel algebraic structure allows parallel execution, unlike DES which relies on bit permutations inefficient on 32-bit CPUs.\n   - Algorithmic simplicity: Clean mathematical formulation over Galois Fields GF(2^8).",
    "masterAnswer": "I. INTRODUCTION & BACKGROUND\nNIST initiated the AES selection process in 1997 because DES (Data Encryption Standard) had become vulnerable due to its short 56-bit key, which was broken by brute-force search machines (e.g. EFF DES Cracker). Triple DES (3DES), while secure, was sluggish in software and had a 64-bit block size vulnerable to birthday attacks.\nNIST evaluated AES candidates against DES under three primary characteristics:\n\n--------------------------------------------------\nII. THE THREE CHARACTERISTIC ANALYSES\n1. SECURITY CHARACTERISTIC:\n   \u2022 Key Length & Brute-Force Immunity: DES uses a 56-bit key (2^56 keyspace), searchable in hours. AES supports 128, 192, and 256-bit keys. A 128-bit key requires 2^128 operations\u2014computationally infeasible.\n   \u2022 Cryptanalytic Resistance: DES is vulnerable to differential cryptanalysis (requiring 2^47 chosen plaintexts) and linear cryptanalysis (2^43 known plaintexts). AES was mathematically constructed to provide strict upper bounds against differential and linear attacks.\n   \u2022 Block Size: DES uses a 64-bit block (vulnerable to collision attacks after encrypting 2^32 blocks). AES uses a 128-bit block (collision requires 2^64 blocks).\n\n2. COST & EFFICIENCY CHARACTERISTIC:\n   \u2022 High Computational Speed: DES processes data sequentially through 16 Feistel rounds with bit-level permutations (P-boxes), which are inefficient on standard 32-bit and 64-bit microprocessors. AES uses byte-level substitutions and matrix multiplications that map directly to 32-bit CPU lookup tables (T-tables).\n   \u2022 Compact Memory Footprint: AES requires very small RAM and ROM footprint (less than 2 KB), making it ideal for smart cards, embedded microcontrollers, and IoT devices.\n\n3. IMPLEMENTATION & ARCHITECTURAL CHARACTERISTICS:\n   \u2022 Design Flexibility: DES is fixed to 56-bit keys and 64-bit blocks. AES provides parameter agility, supporting key sizes of 128, 192, and 256 bits with identical round transformation logic.\n   \u2022 Non-Feistel Parallelism: In DES, only half the block (32 bits) is modified per round. In AES, all 128 bits (16 bytes) are modified simultaneously in parallel during every round via the State matrix.\n   \u2022 Simplicity of Mathematical Design: AES is based on well-defined finite field arithmetic in GF(2^8), enabling rigorous security proofs.",
    "quickRevision": {
      "keyPoints": [
        "Three criteria: Security, Cost, and Implementation characteristics.",
        "Security: 128/192/256-bit keys vs 56-bit DES; immune to brute-force and linear/differential attacks.",
        "Cost: Fast execution on modern CPUs; small RAM/ROM footprint for smart cards.",
        "Implementation: Non-Feistel parallel processing vs DES sequential half-block Feistel structure."
      ],
      "keywords": [
        "56-bit vs 128-bit",
        "Brute-force resistance",
        "Non-Feistel parallelism",
        "GF(2^8) arithmetic",
        "Memory footprint",
        "Smart card suitability"
      ],
      "formulas": [
        "DES keyspace: 2^56",
        "AES keyspace: 2^128 (AES-128)",
        "DES block: 64 bits vs AES block: 128 bits"
      ],
      "diagramElements": [
        "Comparison table between DES and AES",
        "Three pillar diagram: Security, Cost, Implementation"
      ],
      "examinerTraps": [
        "Do not just say 'AES is faster'; explain WHY (byte-level operations vs DES bit-level permutations)."
      ]
    },
    "qText": "Explain the three characteristics analysis of AES over DES.",
    "examReadyAnswer": "I. INTRODUCTION & BACKGROUND\nNIST initiated the AES selection process in 1997 because DES (Data Encryption Standard) had become vulnerable due to its short 56-bit key, which was broken by brute-force search machines (e.g. EFF DES Cracker). Triple DES (3DES), while secure, was sluggish in software and had a 64-bit block size vulnerable to birthday attacks.\nNIST evaluated AES candidates against DES under three primary characteristics:\n\n--------------------------------------------------\nII. THE THREE CHARACTERISTIC ANALYSES\n1. SECURITY CHARACTERISTIC:\n   \u2022 Key Length & Brute-Force Immunity: DES uses a 56-bit key (2^56 keyspace), searchable in hours. AES supports 128, 192, and 256-bit keys. A 128-bit key requires 2^128 operations\u2014computationally infeasible.\n   \u2022 Cryptanalytic Resistance: DES is vulnerable to differential cryptanalysis (requiring 2^47 chosen plaintexts) and linear cryptanalysis (2^43 known plaintexts). AES was mathematically constructed to provide strict upper bounds against differential and linear attacks.\n   \u2022 Block Size: DES uses a 64-bit block (vulnerable to collision attacks after encrypting 2^32 blocks). AES uses a 128-bit block (collision requires 2^64 blocks).\n\n2. COST & EFFICIENCY CHARACTERISTIC:\n   \u2022 High Computational Speed: DES processes data sequentially through 16 Feistel rounds with bit-level permutations (P-boxes), which are inefficient on standard 32-bit and 64-bit microprocessors. AES uses byte-level substitutions and matrix multiplications that map directly to 32-bit CPU lookup tables (T-tables).\n   \u2022 Compact Memory Footprint: AES requires very small RAM and ROM footprint (less than 2 KB), making it ideal for smart cards, embedded microcontrollers, and IoT devices.\n\n3. IMPLEMENTATION & ARCHITECTURAL CHARACTERISTICS:\n   \u2022 Design Flexibility: DES is fixed to 56-bit keys and 64-bit blocks. AES provides parameter agility, supporting key sizes of 128, 192, and 256 bits with identical round transformation logic.\n   \u2022 Non-Feistel Parallelism: In DES, only half the block (32 bits) is modified per round. In AES, all 128 bits (16 bytes) are modified simultaneously in parallel during every round via the State matrix.\n   \u2022 Simplicity of Mathematical Design: AES is based on well-defined finite field arithmetic in GF(2^8), enabling rigorous security proofs."
  },
  {
    "groupId": "GRP-M3-AES-03",
    "masterQuestionTitle": "List and illustrate the five data units used in AES with their structural relationships.",
    "module": 3,
    "topic": "AES - Data Units",
    "subtopic": "Bit, Byte, Word, Block, State",
    "priority": "P0",
    "uniquePaperCount": 2,
    "totalApplicablePapers": 9,
    "frequencyPct": 22.2,
    "historicalFrequency": "2/9 unique papers (22.2%)",
    "historicalPapers": [
      "P2: Jan/Feb 2020 (6M)",
      "P5: Sept/Oct 2022 (5M)"
    ],
    "historicalMarks": "5M, 6M",
    "variants": [
      {
        "qId": "Q007",
        "paperCode": "P2-Q007",
        "wording": "List and explain data units used in AES.",
        "session": "January/February 2020",
        "year": 2020,
        "marks": 6,
        "paperId": "P2",
        "pdfPage": 2,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_02.png",
        "type": "Theory & Classification"
      },
      {
        "qId": "Q008",
        "paperCode": "P5-Q008",
        "wording": "Illustrate different data units used in AES.",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 5,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Diagram & Illustration"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/aes_slide_13_Attachment13.png",
      "source": "AES.ppt, Slide 13 (Tejonidhi M R, MCE Hassan)",
      "caption": "AES data units: Bit, Byte, Word, Block, and State relationships."
    },
    "svgType": "aes-data-units",
    "notesSource": "AES.ppt, Slides 11\u201313 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 11\u201313 - Data Units in AES:\nAES uses five levels of data units:\n1. Bit: The smallest binary unit (0 or 1).\n2. Byte: Group of 8 bits. Treated as an element of Galois Field GF(2^8).\n3. Word: Group of 32 bits (4 bytes). Represented as a 1D array of 4 bytes: w = [b0, b1, b2, b3].\n4. Block: Group of 128 bits (16 bytes = 4 words). Both plaintext and ciphertext blocks are 128 bits.\n5. State: A 4x4 array of bytes (16 bytes = 128 bits) representing the intermediate cryptographic data after each transformation step.",
    "masterAnswer": "I. INTRODUCTION\nAES operates on data at multiple hierarchical representations. To provide mathematical structure over finite fields while allowing efficient processing on 32-bit processors, AES defines five standardized data units.\n\n--------------------------------------------------\nII. THE FIVE DATA UNITS\n1. BIT:\n   \u2022 The fundamental binary digit having value 0 or 1.\n   \u2022 Used in XOR operations and irreducible polynomial calculations.\n\n2. BYTE:\n   \u2022 Comprises 8 bits: b = b7 b6 b5 b4 b3 b2 b1 b0.\n   \u2022 In AES, every byte is interpreted as a polynomial of degree <= 7 with coefficients in GF(2):\n     b7 x^7 + b6 x^6 + b5 x^5 + b4 x^4 + b3 x^3 + b2 x^2 + b1 x + b0\n   \u2022 Arithmetic operations on bytes follow Galois Field GF(2^8) modulo the irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1.\n\n3. WORD:\n   \u2022 Comprises 32 bits = 4 contiguous bytes.\n   \u2022 Represented as a 1D row vector of 4 bytes: w = [b0, b1, b2, b3].\n   \u2022 In AES, one word corresponds exactly to one vertical column of the State matrix. The Key Expansion routine operates primarily on 32-bit words.\n\n4. BLOCK:\n   \u2022 Comprises 128 bits = 16 bytes = 4 words.\n   \u2022 In AES, both the plaintext block and the ciphertext block are strictly 128 bits in size (unlike Rijndael which allowed variable blocks).\n\n5. STATE:\n   \u2022 A two-dimensional 4x4 matrix of bytes:\n     | s0,0  s0,1  s0,2  s0,3 |\n     | s1,0  s1,1  s1,2  s1,3 |\n     | s2,0  s2,1  s2,2  s2,3 |\n     | s3,0  s3,1  s3,2  s3,3 |\n   \u2022 Total size: 4 rows x 4 columns = 16 bytes = 128 bits.\n   \u2022 Represents the intermediate cipher result at every stage of the round transformation.\n   \u2022 Mapped from the 16-byte input block in COLUMN-MAJOR ORDER: s(r, c) = in[r + 4c].",
    "quickRevision": {
      "keyPoints": [
        "Five data units: Bit (1b), Byte (8b), Word (32b/4B), Block (128b/16B), State (4x4 matrix of bytes).",
        "Byte is an element of GF(2^8).",
        "Word is 4 bytes and equals one column of the State matrix.",
        "State is 4x4 bytes (128 bits total), filled in column-major order."
      ],
      "keywords": [
        "Bit",
        "Byte",
        "Word (32-bit)",
        "Block (128-bit)",
        "State (4x4 matrix)",
        "GF(2^8)",
        "Column-major order"
      ],
      "formulas": [
        "1 Byte = 8 bits",
        "1 Word = 4 bytes = 32 bits",
        "1 Block = 16 bytes = 4 words = 128 bits",
        "State: s(r,c) = byte(r + 4c)"
      ],
      "diagramElements": [
        "Hierarchy chart: Bit -> Byte -> Word -> Block -> State",
        "4x4 State matrix layout with rows (0..3) and columns (0..3)"
      ],
      "examinerTraps": [
        "Do not draw State as row-major; AES State is ALWAYS populated column by column."
      ]
    },
    "qText": "List and illustrate the five data units used in AES with their structural relationships.",
    "examReadyAnswer": "I. INTRODUCTION\nAES operates on data at multiple hierarchical representations. To provide mathematical structure over finite fields while allowing efficient processing on 32-bit processors, AES defines five standardized data units.\n\n--------------------------------------------------\nII. THE FIVE DATA UNITS\n1. BIT:\n   \u2022 The fundamental binary digit having value 0 or 1.\n   \u2022 Used in XOR operations and irreducible polynomial calculations.\n\n2. BYTE:\n   \u2022 Comprises 8 bits: b = b7 b6 b5 b4 b3 b2 b1 b0.\n   \u2022 In AES, every byte is interpreted as a polynomial of degree <= 7 with coefficients in GF(2):\n     b7 x^7 + b6 x^6 + b5 x^5 + b4 x^4 + b3 x^3 + b2 x^2 + b1 x + b0\n   \u2022 Arithmetic operations on bytes follow Galois Field GF(2^8) modulo the irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1.\n\n3. WORD:\n   \u2022 Comprises 32 bits = 4 contiguous bytes.\n   \u2022 Represented as a 1D row vector of 4 bytes: w = [b0, b1, b2, b3].\n   \u2022 In AES, one word corresponds exactly to one vertical column of the State matrix. The Key Expansion routine operates primarily on 32-bit words.\n\n4. BLOCK:\n   \u2022 Comprises 128 bits = 16 bytes = 4 words.\n   \u2022 In AES, both the plaintext block and the ciphertext block are strictly 128 bits in size (unlike Rijndael which allowed variable blocks).\n\n5. STATE:\n   \u2022 A two-dimensional 4x4 matrix of bytes:\n     | s0,0  s0,1  s0,2  s0,3 |\n     | s1,0  s1,1  s1,2  s1,3 |\n     | s2,0  s2,1  s2,2  s2,3 |\n     | s3,0  s3,1  s3,2  s3,3 |\n   \u2022 Total size: 4 rows x 4 columns = 16 bytes = 128 bits.\n   \u2022 Represents the intermediate cipher result at every stage of the round transformation.\n   \u2022 Mapped from the 16-byte input block in COLUMN-MAJOR ORDER: s(r, c) = in[r + 4c]."
  },
  {
    "groupId": "GRP-M3-AES-04",
    "masterQuestionTitle": "Demonstrate the AES block-to-state and state-to-block transformations with a suitable example.",
    "module": 3,
    "topic": "AES - Transformations",
    "subtopic": "Block-State Mapping",
    "priority": "P0",
    "uniquePaperCount": 1,
    "totalApplicablePapers": 9,
    "frequencyPct": 11.1,
    "historicalFrequency": "1/9 unique papers (11.1%)",
    "historicalPapers": [
      "P6: Feb/Mar 2023 (8M)"
    ],
    "historicalMarks": "8M",
    "variants": [
      {
        "qId": "Q009",
        "paperCode": "P6-Q009",
        "wording": "Demonstrate the transformations of AES, block to state and state to block with a suitable example.",
        "session": "February/March 2023",
        "year": 2023,
        "marks": 8,
        "paperId": "P6",
        "pdfPage": 6,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_06.png",
        "type": "Transformation with Example"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/aes_slide_14_Attachment12.png",
      "source": "AES.ppt, Slide 14 (Tejonidhi M R, MCE Hassan)",
      "caption": "Mapping of 16-byte block into 4x4 State matrix (column-major order)."
    },
    "svgType": "aes-state",
    "notesSource": "AES.ppt, Slide 14 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 14 - Block to State and State to Block:\n- The 128-bit input block of 16 bytes: in0, in1, in2, ..., in15\n- It is copied into a 4x4 State array in COLUMN-MAJOR ORDER:\n  Row 0: in0,  in4,  in8,  in12\n  Row 1: in1,  in5,  in9,  in13\n  Row 2: in2,  in6,  in10, in14\n  Row 3: in3,  in7,  in11, in15\n- Formula: s[r, c] = in[r + 4*c] where r = row index (0..3) and c = column index (0..3).\n- State to block: The 4x4 State is unpacked back into the 16-byte block column by column:\n  out[r + 4*c] = s[r, c].",
    "masterAnswer": "I. INTRODUCTION\nIn AES, data encryption and decryption operate on a two-dimensional byte array termed the State. The 128-bit input data arrives as a linear sequence of 16 bytes (block).\nBefore any round transformations begin, this 1D block is converted into a 2D 4x4 State array. Conversely, after the final round, the 4x4 State array is converted back into a linear 1D 16-byte ciphertext block.\n\n--------------------------------------------------\nII. BLOCK-TO-STATE TRANSFORMATION\n\u2022 Principle: Bytes from the input block are placed into the 4x4 State matrix in COLUMN-MAJOR ORDER (filling down column 0, then down column 1, and so on).\n\u2022 General Formula:\n  s(r, c) = in[r + 4c]   for r, c in {0, 1, 2, 3}\n  Where:\n  - r is the row number (0, 1, 2, 3)\n  - c is the column number (0, 1, 2, 3)\n\nMatrix Layout:\n| in[0]   in[4]   in[8]    in[12] |   -> Column 0 = in[0..3]\n| in[1]   in[5]   in[9]    in[13] |   -> Column 1 = in[4..7]\n| in[2]   in[6]   in[10]   in[14] |   -> Column 2 = in[8..11]\n| in[3]   in[7]   in[11]   in[15] |   -> Column 3 = in[12..15]\n\n--------------------------------------------------\nIII. WORKED EXAMPLE\nGiven 16 input bytes in hexadecimal:\nin = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, AA, BB, CC, DD, EE, FF]\n\nApplying s(r, c) = in[r + 4c]:\nColumn 0 (c = 0): s(0,0)=in[0]=00, s(1,0)=in[1]=11, s(2,0)=in[2]=22, s(3,0)=in[3]=33\nColumn 1 (c = 1): s(0,1)=in[4]=44, s(1,1)=in[5]=55, s(2,1)=in[6]=66, s(3,1)=in[7]=77\nColumn 2 (c = 2): s(0,2)=in[8]=88, s(1,2)=in[9]=99, s(2,2)=in[10]=AA, s(3,2)=in[11]=BB\nColumn 3 (c = 3): s(0,3)=in[12]=CC, s(1,3)=in[13]=DD, s(2,3)=in[14]=EE, s(3,3)=in[15]=FF\n\nResulting 4x4 State Matrix:\n| 00  44  88  CC |\n| 11  55  99  DD |\n| 22  66  AA  EE |\n| 33  77  BB  FF |\n\n--------------------------------------------------\nIV. STATE-TO-BLOCK TRANSFORMATION\n\u2022 Principle: The 4x4 State matrix is read out column by column to reconstruct the 16-byte output block:\n  out[r + 4c] = s(r, c)\n\u2022 Column 0 produces out[0..3] = [00, 11, 22, 33]\n\u2022 Column 1 produces out[4..7] = [44, 55, 66, 77]\n\u2022 Column 2 produces out[8..11] = [88, 99, AA, BB]\n\u2022 Column 3 produces out[12..15] = [CC, DD, EE, FF]\n\u2022 Result: out = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, AA, BB, CC, DD, EE, FF].",
    "quickRevision": {
      "keyPoints": [
        "Input block is 16 bytes = 128 bits.",
        "State is 4x4 bytes.",
        "Mapping is strictly COLUMN-MAJOR ORDER.",
        "Formula: s(r, c) = in[r + 4c].",
        "State-to-block reads out column by column: out[r + 4c] = s(r, c)."
      ],
      "keywords": [
        "Column-major order",
        "s(r,c) = in[r + 4c]",
        "4x4 byte array",
        "Linear to 2D matrix"
      ],
      "formulas": [
        "s(r, c) = in[r + 4c]",
        "out[r + 4c] = s(r, c)"
      ],
      "diagramElements": [
        "1D array of 16 bytes with indices 0 to 15",
        "Arrow pointing into 4x4 matrix showing columns filled first",
        "Reverse arrow showing columns unpacked back to 1D"
      ],
      "examinerTraps": [
        "Do NOT write row-major order s(r,c) = in[4r + c]. That is a catastrophic mistake!"
      ]
    },
    "qText": "Demonstrate the AES block-to-state and state-to-block transformations with a suitable example.",
    "examReadyAnswer": "I. INTRODUCTION\nIn AES, data encryption and decryption operate on a two-dimensional byte array termed the State. The 128-bit input data arrives as a linear sequence of 16 bytes (block).\nBefore any round transformations begin, this 1D block is converted into a 2D 4x4 State array. Conversely, after the final round, the 4x4 State array is converted back into a linear 1D 16-byte ciphertext block.\n\n--------------------------------------------------\nII. BLOCK-TO-STATE TRANSFORMATION\n\u2022 Principle: Bytes from the input block are placed into the 4x4 State matrix in COLUMN-MAJOR ORDER (filling down column 0, then down column 1, and so on).\n\u2022 General Formula:\n  s(r, c) = in[r + 4c]   for r, c in {0, 1, 2, 3}\n  Where:\n  - r is the row number (0, 1, 2, 3)\n  - c is the column number (0, 1, 2, 3)\n\nMatrix Layout:\n| in[0]   in[4]   in[8]    in[12] |   -> Column 0 = in[0..3]\n| in[1]   in[5]   in[9]    in[13] |   -> Column 1 = in[4..7]\n| in[2]   in[6]   in[10]   in[14] |   -> Column 2 = in[8..11]\n| in[3]   in[7]   in[11]   in[15] |   -> Column 3 = in[12..15]\n\n--------------------------------------------------\nIII. WORKED EXAMPLE\nGiven 16 input bytes in hexadecimal:\nin = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, AA, BB, CC, DD, EE, FF]\n\nApplying s(r, c) = in[r + 4c]:\nColumn 0 (c = 0): s(0,0)=in[0]=00, s(1,0)=in[1]=11, s(2,0)=in[2]=22, s(3,0)=in[3]=33\nColumn 1 (c = 1): s(0,1)=in[4]=44, s(1,1)=in[5]=55, s(2,1)=in[6]=66, s(3,1)=in[7]=77\nColumn 2 (c = 2): s(0,2)=in[8]=88, s(1,2)=in[9]=99, s(2,2)=in[10]=AA, s(3,2)=in[11]=BB\nColumn 3 (c = 3): s(0,3)=in[12]=CC, s(1,3)=in[13]=DD, s(2,3)=in[14]=EE, s(3,3)=in[15]=FF\n\nResulting 4x4 State Matrix:\n| 00  44  88  CC |\n| 11  55  99  DD |\n| 22  66  AA  EE |\n| 33  77  BB  FF |\n\n--------------------------------------------------\nIV. STATE-TO-BLOCK TRANSFORMATION\n\u2022 Principle: The 4x4 State matrix is read out column by column to reconstruct the 16-byte output block:\n  out[r + 4c] = s(r, c)\n\u2022 Column 0 produces out[0..3] = [00, 11, 22, 33]\n\u2022 Column 1 produces out[4..7] = [44, 55, 66, 77]\n\u2022 Column 2 produces out[8..11] = [88, 99, AA, BB]\n\u2022 Column 3 produces out[12..15] = [CC, DD, EE, FF]\n\u2022 Result: out = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, AA, BB, CC, DD, EE, FF]."
  },
  {
    "groupId": "GRP-M3-AES-05",
    "masterQuestionTitle": "With a suitable example, illustrate the SubBytes transformation in AES.",
    "module": 3,
    "topic": "AES - Transformations",
    "subtopic": "SubBytes Transformation",
    "priority": "P0",
    "uniquePaperCount": 1,
    "totalApplicablePapers": 9,
    "frequencyPct": 11.1,
    "historicalFrequency": "1/9 unique papers (11.1%)",
    "historicalPapers": [
      "P5: Sept/Oct 2022 (5M)"
    ],
    "historicalMarks": "5M",
    "variants": [
      {
        "qId": "Q010",
        "paperCode": "P5-Q010",
        "wording": "With a suitable example, illustrate the SubByte transformation in AES.",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 5,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Transformation with Example"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/aes_slide_18_Attachment38.png",
      "source": "AES.ppt, Slide 18 (Tejonidhi M R, MCE Hassan)",
      "caption": "SubBytes transformation using 16x16 S-box lookup table."
    },
    "svgType": "aes-transforms",
    "notesSource": "AES.ppt, Slides 17\u201320 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 17\u201320 - SubBytes Transformation:\n- A non-linear byte substitution that operates independently on each byte of the State.\n- Uses a substitution table (S-box) of size 16x16 bytes.\n- S-box design:\n  1. Multiplicative inverse in GF(2^8) modulo (x^8 + x^4 + x^3 + x + 1). Element {00} maps to itself.\n  2. Affine transformation over GF(2).\n- How S-box substitution works:\n  * For byte {xy}: Left hexadecimal digit 'x' selects row, right hexadecimal digit 'y' selects column.\n  * The byte at intersection (row x, col y) replaces {xy}.\n  * Example: Byte {95} -> Row 9, Column 5 -> Replaced with {2A}.",
    "masterAnswer": "I. INTRODUCTION & DEFINITION\nSubBytes is the ONLY non-linear transformation in AES. It provides confusion by replacing each byte of the 4x4 State matrix independently with a new byte using a fixed 16x16 lookup table called the AES S-box.\n\n--------------------------------------------------\nII. MATHEMATICAL S-BOX CONSTRUCTION\nThe S-box is constructed through two mathematical steps over Galois Field GF(2^8):\n1. Multiplicative Inverse: Each byte is mapped to its multiplicative inverse in GF(2^8) with irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1. The byte {00} has no inverse and maps to itself.\n2. Affine Transformation over GF(2): An invertible affine transformation matrix is applied followed by XORing with the constant byte {63} (01100011_2) to eliminate fixed points and simple algebraic relations.\n\n--------------------------------------------------\nIII. SUBBYTES LOOKUP PROCEDURE & WORKED EXAMPLE\nGiven an input byte s(r, c) represented as two hexadecimal digits {xy}:\n\u2022 The high nibble 'x' determines the ROW of the S-box (0 to F).\n\u2022 The low nibble 'y' determines the COLUMN of the S-box (0 to F).\n\u2022 The byte located at (Row x, Column y) becomes the substituted output byte s'(r, c).\n\nWorked Example:\nSuppose s(1, 2) = {EA}_16:\n1. Row index x = E (14th row).\n2. Column index y = A (10th column).\n3. Looking up the standard AES S-box at intersection (Row E, Column A) yields the hexadecimal value {87}.\n4. Therefore, {EA} is substituted by {87}.\nAll 16 bytes of the State are transformed in parallel in the exact same manner:\ns'(r, c) = S-box[ s(r, c) ] for all 0 <= r, c <= 3.\n\nInverse Transformation: InvSubBytes uses an InvS-box to restore original bytes during decryption.",
    "quickRevision": {
      "keyPoints": [
        "Only non-linear transformation in AES (provides confusion).",
        "Operates on each of the 16 bytes independently.",
        "Uses a 16x16 S-box lookup table.",
        "Row index = high nibble (x); Column index = low nibble (y).",
        "Constructed via GF(2^8) multiplicative inverse + affine transformation."
      ],
      "keywords": [
        "Non-linear substitution",
        "Confusion",
        "16x16 S-box",
        "Row x, Column y",
        "GF(2^8) inverse",
        "Affine transformation",
        "Constant {63}"
      ],
      "formulas": [
        "s'(r, c) = S-Box[ s(r, c) ]",
        "High nibble = Row, Low nibble = Column"
      ],
      "diagramElements": [
        "State byte s(r,c) split into high nibble x and low nibble y",
        "16x16 S-box grid showing Row x and Col y intersection",
        "Output State byte s'(r,c) populated with table value"
      ],
      "examinerTraps": [
        "State clearly that SubBytes is non-linear and operates on individual bytes, not columns or rows."
      ]
    },
    "qText": "With a suitable example, illustrate the SubBytes transformation in AES.",
    "examReadyAnswer": "I. INTRODUCTION & DEFINITION\nSubBytes is the ONLY non-linear transformation in AES. It provides confusion by replacing each byte of the 4x4 State matrix independently with a new byte using a fixed 16x16 lookup table called the AES S-box.\n\n--------------------------------------------------\nII. MATHEMATICAL S-BOX CONSTRUCTION\nThe S-box is constructed through two mathematical steps over Galois Field GF(2^8):\n1. Multiplicative Inverse: Each byte is mapped to its multiplicative inverse in GF(2^8) with irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1. The byte {00} has no inverse and maps to itself.\n2. Affine Transformation over GF(2): An invertible affine transformation matrix is applied followed by XORing with the constant byte {63} (01100011_2) to eliminate fixed points and simple algebraic relations.\n\n--------------------------------------------------\nIII. SUBBYTES LOOKUP PROCEDURE & WORKED EXAMPLE\nGiven an input byte s(r, c) represented as two hexadecimal digits {xy}:\n\u2022 The high nibble 'x' determines the ROW of the S-box (0 to F).\n\u2022 The low nibble 'y' determines the COLUMN of the S-box (0 to F).\n\u2022 The byte located at (Row x, Column y) becomes the substituted output byte s'(r, c).\n\nWorked Example:\nSuppose s(1, 2) = {EA}_16:\n1. Row index x = E (14th row).\n2. Column index y = A (10th column).\n3. Looking up the standard AES S-box at intersection (Row E, Column A) yields the hexadecimal value {87}.\n4. Therefore, {EA} is substituted by {87}.\nAll 16 bytes of the State are transformed in parallel in the exact same manner:\ns'(r, c) = S-box[ s(r, c) ] for all 0 <= r, c <= 3.\n\nInverse Transformation: InvSubBytes uses an InvS-box to restore original bytes during decryption."
  },
  {
    "groupId": "GRP-M3-AES-06",
    "masterQuestionTitle": "With a suitable example, illustrate the MixColumns (Mixing) transformation in AES.",
    "module": 3,
    "topic": "AES - Transformations",
    "subtopic": "MixColumns Transformation",
    "priority": "P0",
    "uniquePaperCount": 1,
    "totalApplicablePapers": 9,
    "frequencyPct": 11.1,
    "historicalFrequency": "1/9 unique papers (11.1%)",
    "historicalPapers": [
      "P7: Dec 2023/Jan 2024 (6M)"
    ],
    "historicalMarks": "6M",
    "variants": [
      {
        "qId": "Q011",
        "paperCode": "P7-Q011",
        "wording": "With a suitable example, illustrate the Mixing Transformation in AES.",
        "session": "December 2023/January 2024",
        "year": 2024,
        "marks": 6,
        "paperId": "P7",
        "pdfPage": 7,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_07.png",
        "type": "Transformation with Example"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/aes_slide_31_Attachment15.png",
      "source": "AES.ppt, Slide 31 (Tejonidhi M R, MCE Hassan)",
      "caption": "MixColumns matrix multiplication in GF(2^8)."
    },
    "svgType": "aes-transforms",
    "notesSource": "AES.ppt, Slides 29\u201334 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 29\u201334 - MixColumns Transformation:\n- Operates on the State column by column. Each column is treated as a 4-term polynomial over GF(2^8).\n- Multiplied modulo (x^4 + 1) with a fixed polynomial:\n  a(x) = {03}x^3 + {01}x^2 + {01}x + {02}\n- Matrix form:\n  [ s'0,c ]   [ 02  03  01  01 ] [ s0,c ]\n  [ s'1,c ] = [ 01  02  03  01 ] [ s1,c ]\n  [ s'2,c ]   [ 01  01  02  03 ] [ s2,c ]\n  [ s'3,c ]   [ 03  01  01  02 ] [ s3,c ]\n- All additions are XOR (+ = XOR).\n- Multiplication by 02 is a 1-bit left shift followed by conditional XOR with {1B} if high bit was 1.",
    "masterAnswer": "I. INTRODUCTION & PURPOSE\nMixColumns is a linear transformation operating on each column of the 4x4 State matrix independently. Together with ShiftRows, it provides high diffusion, ensuring that each output bit depends on every input bit after a few rounds (the avalanche effect).\n\n--------------------------------------------------\nII. MATRIX MULTIPLICATION FORMULATION\nEach 4-byte column [s0,c, s1,c, s2,c, s3,c]^T is multiplied by a constant Maximum Distance Separable (MDS) circulant matrix:\n\n| s'0,c |   | 02  03  01  01 | | s0,c |\n| s'1,c | = | 01  02  03  01 | | s1,c |\n| s'2,c |   | 01  01  02  03 | | s2,c |\n| s'3,c |   | 03  01  01  02 | | s3,c |\n\nWhere:\n\u2022 Addition is bitwise XOR (represented as + or XOR).\n\u2022 Multiplication is finite field multiplication in GF(2^8) modulo m(x) = x^8 + x^4 + x^3 + x + 1.\n\nEquations for the first transformed byte s'0,c:\ns'0,c = ({02} \u2022 s0,c) XOR ({03} \u2022 s1,c) XOR ({01} \u2022 s2,c) XOR ({01} \u2022 s3,c)\n\nRules for GF(2^8) multiplication by constant coefficients:\n\u2022 Multiplication by {01}: Returns the original byte unchanged.\n\u2022 Multiplication by {02}: xtime(b) operation -> Left shift by 1 bit (b << 1). If the original most significant bit was 1, XOR the result with irreducible polynomial constant {1B} (00011011_2).\n\u2022 Multiplication by {03}: Computed as ({02} \u2022 b) XOR b.\n\n--------------------------------------------------\nIII. WORKED EXAMPLE\nLet Column 0 be [s0,0, s1,0, s2,0, s3,0]^T = [{02}, {01}, {01}, {03}]^T:\nCalculating s'0,0:\ns'0,0 = ({02} \u2022 {02}) XOR ({03} \u2022 {01}) XOR ({01} \u2022 {01}) XOR ({01} \u2022 {03})\n1. {02} \u2022 {02} = {04}\n2. {03} \u2022 {01} = ({02} \u2022 {01}) XOR {01} = {02} XOR {01} = {03}\n3. {01} \u2022 {01} = {01}\n4. {01} \u2022 {03} = {03}\nCombining with XOR:\ns'0,0 = {04} XOR {03} XOR {01} XOR {03}\n      = {04} XOR {01} = 00000100 XOR 00000001 = 00000101 = {05}.\n\nThus, the first output byte is s'0,0 = {05}.",
    "quickRevision": {
      "keyPoints": [
        "Linear transformation operating on columns independently.",
        "Provides diffusion across 32-bit words.",
        "Multiplies each column by fixed circulant matrix [02 03 01 01; 01 02 03 01; ...].",
        "Addition is bitwise XOR.",
        "Multiplication by 02 is xtime (shift left, XOR {1B} if carry).",
        "MixColumns is OMITTED in Round 10!"
      ],
      "keywords": [
        "Diffusion",
        "Column-by-column",
        "MDS matrix",
        "GF(2^8) multiplication",
        "xtime",
        "Irreducible constant {1B}",
        "Omitted in final round"
      ],
      "formulas": [
        "s'0,c = (02*s0,c) ^ (03*s1,c) ^ (01*s2,c) ^ (01*s3,c)",
        "03 * b = (02 * b) ^ b"
      ],
      "diagramElements": [
        "4x4 constant matrix multiplying 4x1 State column",
        "Formula breakdown for s'0,c"
      ],
      "examinerTraps": [
        "Always remember to mention that MixColumns is absent in the 10th (final) round."
      ]
    },
    "qText": "With a suitable example, illustrate the MixColumns (Mixing) transformation in AES.",
    "examReadyAnswer": "I. INTRODUCTION & PURPOSE\nMixColumns is a linear transformation operating on each column of the 4x4 State matrix independently. Together with ShiftRows, it provides high diffusion, ensuring that each output bit depends on every input bit after a few rounds (the avalanche effect).\n\n--------------------------------------------------\nII. MATRIX MULTIPLICATION FORMULATION\nEach 4-byte column [s0,c, s1,c, s2,c, s3,c]^T is multiplied by a constant Maximum Distance Separable (MDS) circulant matrix:\n\n| s'0,c |   | 02  03  01  01 | | s0,c |\n| s'1,c | = | 01  02  03  01 | | s1,c |\n| s'2,c |   | 01  01  02  03 | | s2,c |\n| s'3,c |   | 03  01  01  02 | | s3,c |\n\nWhere:\n\u2022 Addition is bitwise XOR (represented as + or XOR).\n\u2022 Multiplication is finite field multiplication in GF(2^8) modulo m(x) = x^8 + x^4 + x^3 + x + 1.\n\nEquations for the first transformed byte s'0,c:\ns'0,c = ({02} \u2022 s0,c) XOR ({03} \u2022 s1,c) XOR ({01} \u2022 s2,c) XOR ({01} \u2022 s3,c)\n\nRules for GF(2^8) multiplication by constant coefficients:\n\u2022 Multiplication by {01}: Returns the original byte unchanged.\n\u2022 Multiplication by {02}: xtime(b) operation -> Left shift by 1 bit (b << 1). If the original most significant bit was 1, XOR the result with irreducible polynomial constant {1B} (00011011_2).\n\u2022 Multiplication by {03}: Computed as ({02} \u2022 b) XOR b.\n\n--------------------------------------------------\nIII. WORKED EXAMPLE\nLet Column 0 be [s0,0, s1,0, s2,0, s3,0]^T = [{02}, {01}, {01}, {03}]^T:\nCalculating s'0,0:\ns'0,0 = ({02} \u2022 {02}) XOR ({03} \u2022 {01}) XOR ({01} \u2022 {01}) XOR ({01} \u2022 {03})\n1. {02} \u2022 {02} = {04}\n2. {03} \u2022 {01} = ({02} \u2022 {01}) XOR {01} = {02} XOR {01} = {03}\n3. {01} \u2022 {01} = {01}\n4. {01} \u2022 {03} = {03}\nCombining with XOR:\ns'0,0 = {04} XOR {03} XOR {01} XOR {03}\n      = {04} XOR {01} = 00000100 XOR 00000001 = 00000101 = {05}.\n\nThus, the first output byte is s'0,0 = {05}."
  },
  {
    "groupId": "GRP-M3-ASYM-01",
    "masterQuestionTitle": "Compare symmetric and asymmetric key cryptography and explain the asymmetric key cryptosystem architecture with a neat diagram.",
    "module": 3,
    "topic": "Asymmetric Key Cryptography",
    "subtopic": "Symmetric vs Asymmetric & Architecture",
    "priority": "P0",
    "uniquePaperCount": 5,
    "totalApplicablePapers": 9,
    "frequencyPct": 55.6,
    "historicalFrequency": "5/9 unique papers (55.6%)",
    "historicalPapers": [
      "P1: Dec 2018 (5M)",
      "P2: Jan/Feb 2020 (8M)",
      "P4: Feb/Mar 2022 (10M)",
      "P3: Jan 2021 (2M)",
      "P7: Dec 2023/Jan 2024 (10M)"
    ],
    "historicalMarks": "2M, 5M, 8M, 10M",
    "variants": [
      {
        "qId": "Q012",
        "paperCode": "P1-Q012",
        "wording": "Compare public key encryption with private key encryption / Differentiate between symmetric and asymmetric key cryptosystem.",
        "session": "December 2018",
        "year": 2018,
        "marks": 5,
        "paperId": "P1",
        "pdfPage": 1,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_01.png",
        "type": "Comparative Table"
      },
      {
        "qId": "Q013",
        "paperCode": "P2-Q013",
        "wording": "What are the differences between Symmetric-key and asymmetric key cryptosystem? Show the important facts of asymmetric key cryptosystem with neat diagram.",
        "session": "January/February 2020",
        "year": 2020,
        "marks": 8,
        "paperId": "P2",
        "pdfPage": 2,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_02.png",
        "type": "Differences & Facts Diagram"
      },
      {
        "qId": "Q014",
        "paperCode": "P4-Q014",
        "wording": "With a neat diagram explain asymmetric key cryptosystem.",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Diagram & Architecture"
      },
      {
        "qId": "Q015",
        "paperCode": "P3-Q015",
        "wording": "Differentiate between symmetric and asymmetric key cryptography.",
        "session": "January 2021",
        "year": 2021,
        "marks": 2,
        "paperId": "P3",
        "pdfPage": 3,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_03.png",
        "type": "Short Differentiation"
      },
      {
        "qId": "Q016",
        "paperCode": "P7-Q016",
        "wording": "With a neat diagram explain asymmetric key cryptosystem.",
        "session": "December 2023/January 2024",
        "year": 2024,
        "marks": 10,
        "paperId": "P7",
        "pdfPage": 7,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_07.png",
        "type": "Diagram & Comprehensive Theory"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_04_Attachment91.png",
      "source": "AS_.ppt, Slide 4 (Tejonidhi M R, MCE Hassan)",
      "caption": "General model of asymmetric-key cryptosystem showing public/private key pairs."
    },
    "svgType": "sym-asym",
    "notesSource": "AS_.ppt, Slides 3\u20137 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 3\u20137 - Symmetric vs Asymmetric Key Cryptography:\n- Symmetric-key cryptography:\n  * Uses a single shared secret key for both encryption and decryption.\n  * Secret key must be shared securely beforehand.\n  * Number of keys needed for N users: N*(N - 1) / 2.\n- Asymmetric-key cryptography (Public-key):\n  * Uses two mathematically linked keys: a Public Key and a Private Key.\n  * Public key is known to everyone (published in directory).\n  * Private key is kept secret by the owner.\n  * Number of keys needed for N users: 2*N keys (N public + N private).\n- Trapdoor One-Way Function:\n  * Easy to compute in forward direction: Y = f(X).\n  * Computationally infeasible to invert without special trapdoor knowledge: X = f^-1(Y) is impossible without trapdoor k.",
    "masterAnswer": "I. COMPARISON: SYMMETRIC VS ASYMMETRIC CRYPTOGRAPHY\n| Parameter | Symmetric-Key Cryptography | Asymmetric-Key Cryptography |\n| :--- | :--- | :--- |\n| Number of Keys | Single shared secret key for both encryption & decryption | Key pair: Public key (KU) and Private key (KR) |\n| Key Secrecy | Secret key must remain confidential to both parties | Public key is published openly; Private key is kept secret by receiver |\n| Key Distribution | Major challenge; requires secure out-of-band channel | Simple; public key can be transmitted over unsecure channels |\n| Key Complexity | For N users: N(N - 1) / 2 keys required | For N users: 2N keys required (N public + N private) |\n| Speed & Efficiency | Very fast (hardware/software optimized; e.g. AES, DES) | 100 to 1000 times slower due to modular exponentiation arithmetic |\n| Security Basis | Substitution, permutation, diffusion, and confusion | Hard mathematical problems (Integer Factorization, DLP) |\n| Digital Signatures | Cannot provide non-repudiation inherently | Provides non-repudiation and authentication inherently |\n| Primary Use Case | Bulk data encryption (files, network packets) | Key exchange, digital signatures, small message encryption |\n\n--------------------------------------------------\nII. ASYMMETRIC CRYPTOSYSTEM ARCHITECTURE & COMPONENTS\nAn asymmetric-key cryptosystem comprises six fundamental components:\n1. Plaintext (P): The original intelligible message or data fed into the algorithm.\n2. Encryption Algorithm (E): Performs mathematical transformations on Plaintext P using Receiver Bob's Public Key:\n   C = E(KU_Bob, P)\n3. Public and Private Keys:\n   \u2022 Public Key (KU_Bob): Available publicly; anyone can encrypt messages destined for Bob.\n   \u2022 Private Key (KR_Bob): Kept secret exclusively by Bob; used to invert the transformation.\n4. Ciphertext (C): The scrambled, unintelligible output transmitted over the insecure channel.\n5. Decryption Algorithm (D): Accepts Ciphertext C and Bob's Private Key KR_Bob to recover Plaintext:\n   P = D(KR_Bob, C) = D(KR_Bob, E(KU_Bob, P))\n\n--------------------------------------------------\nIII. IMPORTANT MATHEMATICAL FACTS & TRAPDOOR ONE-WAY FUNCTION\n1. Asymmetry Principle: It is computationally infeasible to deduce Private Key KR from Public Key KU, or to recover Plaintext P from Ciphertext C without KR.\n2. Trapdoor One-Way Function Concept:\n   \u2022 A function f is easy to compute in forward direction: y = f(x).\n   \u2022 Inverting f is computationally impossible: finding x given y has exponential time complexity.\n   \u2022 TRAPDOOR: With supplementary secret information k (the trapdoor / private key), inverting becomes polynomial-time: x = g(y, k).\n   \u2022 Examples: Multiplying two large primes p, q is instantaneous; factoring n = pq without knowing p or q is intractable.",
    "quickRevision": {
      "keyPoints": [
        "Symmetric uses 1 shared key; Asymmetric uses 2 keys (Public + Private).",
        "Key count: N(N-1)/2 for symmetric vs 2N for asymmetric.",
        "Asymmetric is slower; based on hard mathematical problems (factoring, discrete log).",
        "Provides non-repudiation and digital signatures.",
        "Based on Trapdoor One-Way Functions."
      ],
      "keywords": [
        "Symmetric vs Asymmetric",
        "Public Key (KU)",
        "Private Key (KR)",
        "2N vs N(N-1)/2",
        "Trapdoor One-Way Function",
        "Non-repudiation"
      ],
      "formulas": [
        "Symmetric keys = N(N - 1) / 2",
        "Asymmetric keys = 2N",
        "Encryption: C = E(KU, P)",
        "Decryption: P = D(KR, C)"
      ],
      "diagramElements": [
        "Alice (Sender) with Plaintext",
        "Encryption block using Bob's Public Key",
        "Insecure channel carrying Ciphertext",
        "Decryption block using Bob's Private Key",
        "Bob (Receiver) recovering Plaintext"
      ],
      "examinerTraps": [
        "Always state who owns which key: Alice encrypts with BOB'S PUBLIC KEY; Bob decrypts with BOB'S PRIVATE KEY."
      ]
    },
    "qText": "Compare symmetric and asymmetric key cryptography and explain the asymmetric key cryptosystem architecture with a neat diagram.",
    "examReadyAnswer": "I. COMPARISON: SYMMETRIC VS ASYMMETRIC CRYPTOGRAPHY\n| Parameter | Symmetric-Key Cryptography | Asymmetric-Key Cryptography |\n| :--- | :--- | :--- |\n| Number of Keys | Single shared secret key for both encryption & decryption | Key pair: Public key (KU) and Private key (KR) |\n| Key Secrecy | Secret key must remain confidential to both parties | Public key is published openly; Private key is kept secret by receiver |\n| Key Distribution | Major challenge; requires secure out-of-band channel | Simple; public key can be transmitted over unsecure channels |\n| Key Complexity | For N users: N(N - 1) / 2 keys required | For N users: 2N keys required (N public + N private) |\n| Speed & Efficiency | Very fast (hardware/software optimized; e.g. AES, DES) | 100 to 1000 times slower due to modular exponentiation arithmetic |\n| Security Basis | Substitution, permutation, diffusion, and confusion | Hard mathematical problems (Integer Factorization, DLP) |\n| Digital Signatures | Cannot provide non-repudiation inherently | Provides non-repudiation and authentication inherently |\n| Primary Use Case | Bulk data encryption (files, network packets) | Key exchange, digital signatures, small message encryption |\n\n--------------------------------------------------\nII. ASYMMETRIC CRYPTOSYSTEM ARCHITECTURE & COMPONENTS\nAn asymmetric-key cryptosystem comprises six fundamental components:\n1. Plaintext (P): The original intelligible message or data fed into the algorithm.\n2. Encryption Algorithm (E): Performs mathematical transformations on Plaintext P using Receiver Bob's Public Key:\n   C = E(KU_Bob, P)\n3. Public and Private Keys:\n   \u2022 Public Key (KU_Bob): Available publicly; anyone can encrypt messages destined for Bob.\n   \u2022 Private Key (KR_Bob): Kept secret exclusively by Bob; used to invert the transformation.\n4. Ciphertext (C): The scrambled, unintelligible output transmitted over the insecure channel.\n5. Decryption Algorithm (D): Accepts Ciphertext C and Bob's Private Key KR_Bob to recover Plaintext:\n   P = D(KR_Bob, C) = D(KR_Bob, E(KU_Bob, P))\n\n--------------------------------------------------\nIII. IMPORTANT MATHEMATICAL FACTS & TRAPDOOR ONE-WAY FUNCTION\n1. Asymmetry Principle: It is computationally infeasible to deduce Private Key KR from Public Key KU, or to recover Plaintext P from Ciphertext C without KR.\n2. Trapdoor One-Way Function Concept:\n   \u2022 A function f is easy to compute in forward direction: y = f(x).\n   \u2022 Inverting f is computationally impossible: finding x given y has exponential time complexity.\n   \u2022 TRAPDOOR: With supplementary secret information k (the trapdoor / private key), inverting becomes polynomial-time: x = g(y, k).\n   \u2022 Examples: Multiplying two large primes p, q is instantaneous; factoring n = pq without knowing p or q is intractable."
  },
  {
    "groupId": "GRP-M3-KNAP-01",
    "masterQuestionTitle": "Find the plaintext tuple x from the given super-increasing knapsack vector a and target sum s using the inv_knapsackSum routine.",
    "module": 3,
    "topic": "Knapsack Cryptosystem",
    "subtopic": "Super-Increasing Inversion (inv_knapsackSum)",
    "priority": "P0",
    "uniquePaperCount": 2,
    "totalApplicablePapers": 9,
    "frequencyPct": 22.2,
    "historicalFrequency": "2/9 unique papers (22.2%)",
    "historicalPapers": [
      "P7: Dec 2023/Jan 2024 (8M)",
      "P9: Feb/Mar 2025 (10M)"
    ],
    "historicalMarks": "8M, 10M",
    "variants": [
      {
        "qId": "Q017",
        "paperCode": "P7-Q017",
        "wording": "Assume that a = (17, 25, 46, 94, 201, 400) and sum s = 272 are given. Find the tuple x using the inv_knapsackSum routine.",
        "session": "December 2023/January 2024",
        "year": 2024,
        "marks": 8,
        "paperId": "P7",
        "pdfPage": 7,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_07.png",
        "type": "Algorithm & Numerical"
      },
      {
        "qId": "Q018",
        "paperCode": "P9-Q018",
        "wording": "Assume that a = (17, 25, 46, 94, 201, 400) and s = 272 are given. Find the tuple x using the inv_knapsackSum routine.",
        "session": "February/March 2025",
        "year": 2025,
        "marks": 10,
        "paperId": "P9",
        "pdfPage": 9,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_09.png",
        "type": "Algorithm & Numerical"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_14_Attachment14.png",
      "source": "AS_.ppt, Slide 14 (Tejonidhi M R, MCE Hassan)",
      "caption": "Inverting a super-increasing knapsack sum using greedy algorithm."
    },
    "svgType": "knapsack-flow",
    "notesSource": "AS_.ppt, Slides 13\u201316 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 13\u201316 - Inversion of Super-Increasing Knapsack Sum:\n- Super-increasing knapsack vector: A tuple a = (a1, a2, ..., an) where each element is strictly greater than the sum of all preceding elements:\n  ai > SUM_{j=1}^{i-1} aj\n- General subset-sum knapsack is NP-complete.\n- Super-increasing knapsack can be solved in O(n) polynomial time using a simple GREEDY ALGORITHM:\n  * Start from the largest element an down to a1.\n  * For i = n down to 1:\n    - If target sum s >= ai:\n        set xi = 1, update s = s - ai\n    - Else:\n        set xi = 0\n- Output binary tuple: x = (x1, x2, ..., xn).",
    "masterAnswer": "I. THEORETICAL FOUNDATION\nThe general knapsack problem (subset-sum problem) is NP-complete: given a set of integers and a target sum s, finding a binary tuple x such that sum(xi * ai) = s requires exponential time O(2^n).\nHowever, when the knapsack vector 'a' is SUPER-INCREASING, the problem becomes trivially solvable in linear time O(n) using a greedy algorithm.\nA sequence a = (a1, a2, ..., an) is super-increasing if each element exceeds the sum of all previous elements:\nai > SUM_{j=1}^{i-1} aj  for all i = 2, 3, ..., n.\n\n--------------------------------------------------\nII. INV_KNAPSACKSUM ALGORITHM\nInput: Super-increasing vector a = (a1, a2, ..., an), target sum s\nOutput: Binary tuple x = (x1, x2, ..., xn)\nProcedure:\n1. For i = n down to 1:\n   a. If s >= ai:\n        xi = 1\n        s = s - ai\n   b. Else:\n        xi = 0\n2. If s == 0, return x; otherwise, no solution exists.\n\n--------------------------------------------------\nIII. COMPLETE STEP-BY-STEP NUMERICAL DERIVATION\nGiven:\n\u2022 Super-increasing vector: a = (17, 25, 46, 94, 201, 400) with n = 6\n\u2022 Target sum: s = 272\n\nVerification of Super-Increasing Property:\n\u2022 a1 = 17\n\u2022 a2 = 25 > 17 (OK)\n\u2022 a3 = 46 > 17 + 25 = 42 (OK)\n\u2022 a4 = 94 > 17 + 25 + 46 = 88 (OK)\n\u2022 a5 = 201 > 17 + 25 + 46 + 94 = 182 (OK)\n\u2022 a6 = 400 > 17 + 25 + 46 + 94 + 201 = 383 (OK)\n\nGreedy Execution (i = 6 down to 1):\n\u2022 Step 1 (i = 6): Element a6 = 400, current sum s = 272.\n  Since 272 < 400: x6 = 0, remaining sum s = 272.\n\u2022 Step 2 (i = 5): Element a5 = 201, current sum s = 272.\n  Since 272 >= 201: x5 = 1, remaining sum s = 272 - 201 = 71.\n\u2022 Step 3 (i = 4): Element a4 = 94, current sum s = 71.\n  Since 71 < 94: x4 = 0, remaining sum s = 71.\n\u2022 Step 4 (i = 3): Element a3 = 46, current sum s = 71.\n  Since 71 >= 46: x3 = 1, remaining sum s = 71 - 46 = 25.\n\u2022 Step 5 (i = 2): Element a2 = 25, current sum s = 25.\n  Since 25 >= 25: x2 = 1, remaining sum s = 25 - 25 = 0.\n\u2022 Step 6 (i = 1): Element a1 = 17, current sum s = 0.\n  Since 0 < 17: x1 = 0, remaining sum s = 0.\n\nFinal Result:\nThe resulting tuple is:\nx = (x1, x2, x3, x4, x5, x6) = (0, 1, 1, 0, 1, 0)\n\nMathematical Verification Proof:\ns_calc = x1*a1 + x2*a2 + x3*a3 + x4*a4 + x5*a5 + x6*a6\n       = 0(17) + 1(25) + 1(46) + 0(94) + 1(201) + 0(400)\n       = 25 + 46 + 201\n       = 272 (Matches target sum s exactly!)",
    "mathSolutions": [
      {
        "variantLabel": "PYQ P7 (Dec 2023) & P9 (Feb 2025): a=(17, 25, 46, 94, 201, 400), s=272",
        "given": "a = (17, 25, 46, 94, 201, 400), s = 272",
        "required": "Find binary tuple x = (x1, x2, x3, x4, x5, x6)",
        "formula": "Greedy comparison from i=n down to 1: if s >= a[i], x[i]=1 and s=s-a[i]; else x[i]=0",
        "steps": [
          "Verify super-increasing property: 25>17, 46>42, 94>88, 201>182, 400>383. Property holds.",
          "i = 6: a[6] = 400. 272 < 400 -> x[6] = 0, s = 272",
          "i = 5: a[5] = 201. 272 >= 201 -> x[5] = 1, s = 272 - 201 = 71",
          "i = 4: a[4] = 94. 71 < 94 -> x[4] = 0, s = 71",
          "i = 3: a[3] = 46. 71 >= 46 -> x[3] = 1, s = 71 - 46 = 25",
          "i = 2: a[2] = 25. 25 >= 25 -> x[2] = 1, s = 25 - 25 = 0",
          "i = 1: a[1] = 17. 0 < 17 -> x[1] = 0, s = 0"
        ],
        "finalAnswer": "x = (0, 1, 1, 0, 1, 0)",
        "verification": "25 + 46 + 201 = 272. Exact match verified.",
        "calculatorType": "knapsack",
        "calculatorPreset": {
          "a": "17,25,46,94,201,400",
          "s": 272
        }
      }
    ],
    "quickRevision": {
      "keyPoints": [
        "Super-increasing vector: ai > sum of all previous elements.",
        "General knapsack is NP-complete; super-increasing knapsack is O(n) polynomial.",
        "Always iterate from LARGEST element (an) down to smallest (a1).",
        "If s >= ai: set xi = 1, subtract ai; else set xi = 0.",
        "Verify by summing selected elements: 25 + 46 + 201 = 272."
      ],
      "keywords": [
        "Super-increasing knapsack",
        "NP-complete",
        "Greedy algorithm",
        "O(n) complexity",
        "inv_knapsackSum",
        "Binary tuple x"
      ],
      "formulas": [
        "ai > sum(a1 .. a_{i-1})",
        "s_new = s - ai (when s >= ai)",
        "x = (0, 1, 1, 0, 1, 0)"
      ],
      "diagramElements": [
        "Step-by-step subtraction ladder from 272 down to 0",
        "Binary tuple indicator array"
      ],
      "examinerTraps": [
        "Do NOT start from a1; greedy algorithm MUST start from the largest element an!"
      ]
    },
    "qText": "Find the plaintext tuple x from the given super-increasing knapsack vector a and target sum s using the inv_knapsackSum routine.",
    "examReadyAnswer": "I. THEORETICAL FOUNDATION\nThe general knapsack problem (subset-sum problem) is NP-complete: given a set of integers and a target sum s, finding a binary tuple x such that sum(xi * ai) = s requires exponential time O(2^n).\nHowever, when the knapsack vector 'a' is SUPER-INCREASING, the problem becomes trivially solvable in linear time O(n) using a greedy algorithm.\nA sequence a = (a1, a2, ..., an) is super-increasing if each element exceeds the sum of all previous elements:\nai > SUM_{j=1}^{i-1} aj  for all i = 2, 3, ..., n.\n\n--------------------------------------------------\nII. INV_KNAPSACKSUM ALGORITHM\nInput: Super-increasing vector a = (a1, a2, ..., an), target sum s\nOutput: Binary tuple x = (x1, x2, ..., xn)\nProcedure:\n1. For i = n down to 1:\n   a. If s >= ai:\n        xi = 1\n        s = s - ai\n   b. Else:\n        xi = 0\n2. If s == 0, return x; otherwise, no solution exists.\n\n--------------------------------------------------\nIII. COMPLETE STEP-BY-STEP NUMERICAL DERIVATION\nGiven:\n\u2022 Super-increasing vector: a = (17, 25, 46, 94, 201, 400) with n = 6\n\u2022 Target sum: s = 272\n\nVerification of Super-Increasing Property:\n\u2022 a1 = 17\n\u2022 a2 = 25 > 17 (OK)\n\u2022 a3 = 46 > 17 + 25 = 42 (OK)\n\u2022 a4 = 94 > 17 + 25 + 46 = 88 (OK)\n\u2022 a5 = 201 > 17 + 25 + 46 + 94 = 182 (OK)\n\u2022 a6 = 400 > 17 + 25 + 46 + 94 + 201 = 383 (OK)\n\nGreedy Execution (i = 6 down to 1):\n\u2022 Step 1 (i = 6): Element a6 = 400, current sum s = 272.\n  Since 272 < 400: x6 = 0, remaining sum s = 272.\n\u2022 Step 2 (i = 5): Element a5 = 201, current sum s = 272.\n  Since 272 >= 201: x5 = 1, remaining sum s = 272 - 201 = 71.\n\u2022 Step 3 (i = 4): Element a4 = 94, current sum s = 71.\n  Since 71 < 94: x4 = 0, remaining sum s = 71.\n\u2022 Step 4 (i = 3): Element a3 = 46, current sum s = 71.\n  Since 71 >= 46: x3 = 1, remaining sum s = 71 - 46 = 25.\n\u2022 Step 5 (i = 2): Element a2 = 25, current sum s = 25.\n  Since 25 >= 25: x2 = 1, remaining sum s = 25 - 25 = 0.\n\u2022 Step 6 (i = 1): Element a1 = 17, current sum s = 0.\n  Since 0 < 17: x1 = 0, remaining sum s = 0.\n\nFinal Result:\nThe resulting tuple is:\nx = (x1, x2, x3, x4, x5, x6) = (0, 1, 1, 0, 1, 0)\n\nMathematical Verification Proof:\ns_calc = x1*a1 + x2*a2 + x3*a3 + x4*a4 + x5*a5 + x6*a6\n       = 0(17) + 1(25) + 1(46) + 0(94) + 1(201) + 0(400)\n       = 25 + 46 + 201\n       = 272 (Matches target sum s exactly!)"
  },
  {
    "groupId": "GRP-M3-KNAP-02",
    "masterQuestionTitle": "Given a super-increasing knapsack private key with multiplier n and modulus m, determine the public key and encrypt the binary plaintext.",
    "module": 3,
    "topic": "Knapsack Cryptosystem",
    "subtopic": "Merkle-Hellman Key Generation & Encryption",
    "priority": "P0",
    "uniquePaperCount": 1,
    "totalApplicablePapers": 9,
    "frequencyPct": 11.1,
    "historicalFrequency": "1/9 unique papers (11.1%)",
    "historicalPapers": [
      "P6: Feb/Mar 2023 (6M)"
    ],
    "historicalMarks": "6M",
    "variants": [
      {
        "qId": "Q019",
        "paperCode": "P6-Q019",
        "wording": "Consider a super increasing knapsack {1, 2, 4, 10, 20, 40} as the private key with the values of m = 110 and n = 31. Find the values of public key and encrypt the plaintext 100100111100101110 using Knapsack encryption algorithm.",
        "session": "February/March 2023",
        "year": 2023,
        "marks": 6,
        "paperId": "P6",
        "pdfPage": 6,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_06.png",
        "type": "Key Generation & Encryption"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_14_Attachment14.png",
      "source": "AS_.ppt, Slide 14 (Tejonidhi M R, MCE Hassan)",
      "caption": "Merkle-Hellman knapsack public-key generation and block encryption."
    },
    "svgType": "knapsack-flow",
    "notesSource": "AS_.ppt, Slides 17\u201324 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 17\u201324 - Merkle-Hellman Knapsack Cryptosystem:\n- Private Key: A super-increasing knapsack b = {b1, b2, ..., bk}, modulus m, and multiplier n.\n  * Modulus m > SUM(bi).\n  * Multiplier n chosen such that gcd(n, m) = 1.\n- Public Key Generation:\n  * ai = (bi * n) mod m for each element.\n  * Public key is a = {a1, a2, ..., ak} (NOT super-increasing, looks random).\n- Encryption:\n  * Divide plaintext into blocks of k bits: x = (x1, x2, ..., xk).\n  * Compute ciphertext C = SUM_{i=1}^k (xi * ai).",
    "masterAnswer": "I. INTRODUCTION\nThe Merkle-Hellman knapsack cryptosystem creates an asymmetric trapdoor by taking an easy-to-solve super-increasing knapsack (private key) and disguising it as a hard-to-solve general knapsack (public key) using modular arithmetic.\n\n--------------------------------------------------\nII. COMPLETE STEP-BY-STEP NUMERICAL DERIVATION\nGiven:\n\u2022 Super-increasing private knapsack: b = {1, 2, 4, 10, 20, 40} (k = 6 elements)\n\u2022 Modulus: m = 110 (Note: Sum(bi) = 1+2+4+10+20+40 = 77 < 110, condition holds)\n\u2022 Multiplier: n = 31 (gcd(31, 110) = 1, condition holds)\n\u2022 Plaintext: 100100111100101110 (18 bits total)\n\nStep 1: Compute Public Key a = {a1, a2, a3, a4, a5, a6}\nFormula: ai = (bi * n) mod m = (bi * 31) mod 110\n\u2022 a1 = (1 * 31) mod 110 = 31 mod 110 = 31\n\u2022 a2 = (2 * 31) mod 110 = 62 mod 110 = 62\n\u2022 a3 = (4 * 31) mod 110 = 124 mod 110 = 14\n\u2022 a4 = (10 * 31) mod 110 = 310 mod 110 = 90  (since 310 - 2*110 = 90)\n\u2022 a5 = (20 * 31) mod 110 = 620 mod 110 = 70  (since 620 - 5*110 = 70)\n\u2022 a6 = (40 * 31) mod 110 = 1240 mod 110 = 30 (since 1240 - 11*110 = 30)\n\nPublic Key:\na = {31, 62, 14, 90, 70, 30}\n\nStep 2: Plaintext Partitioning\nThe plaintext has 18 bits. Since k = 6, divide into 3 blocks of 6 bits:\n\u2022 Block 1: x^(1) = [1, 0, 0, 1, 0, 0]\n\u2022 Block 2: x^(2) = [1, 1, 1, 1, 0, 0]\n\u2022 Block 3: x^(3) = [1, 0, 1, 1, 1, 0]\n\nStep 3: Ciphertext Computation\nFormula: C = sum(xi * ai) for each 6-bit block:\n\u2022 Block 1 (100100):\n  C1 = 1(31) + 0(62) + 0(14) + 1(90) + 0(70) + 0(30)\n     = 31 + 90 = 121\n\n\u2022 Block 2 (111100):\n  C2 = 1(31) + 1(62) + 1(14) + 1(90) + 0(70) + 0(30)\n     = 31 + 62 + 14 + 90 = 197\n\n\u2022 Block 3 (101110):\n  C3 = 1(31) + 0(62) + 1(14) + 1(90) + 1(70) + 0(30)\n     = 31 + 14 + 90 + 70 = 205\n\nFinal Output:\n\u2022 Public Key: a = {31, 62, 14, 90, 70, 30}\n\u2022 Ciphertext Blocks: C = {121, 197, 205}",
    "mathSolutions": [
      {
        "variantLabel": "PYQ P6 (Feb/Mar 2023): b={1,2,4,10,20,40}, m=110, n=31, P=100100111100101110",
        "given": "Private knapsack b={1,2,4,10,20,40}, m=110, n=31, Plaintext=100100111100101110",
        "required": "1. Public key 'a'; 2. Ciphertext for 18-bit plaintext",
        "formula": "ai = (bi * n) mod m; C = sum(xi * ai)",
        "steps": [
          "Calculate public key: a1=(1*31)%110=31, a2=(2*31)%110=62, a3=(4*31)%110=14, a4=(10*31)%110=90, a5=(20*31)%110=70, a6=(40*31)%110=30",
          "Public Key: a = {31, 62, 14, 90, 70, 30}",
          "Partition plaintext into 6-bit blocks: B1=[1,0,0,1,0,0], B2=[1,1,1,1,0,0], B3=[1,0,1,1,1,0]",
          "Encrypt B1 (100100): C1 = 31*1 + 90*1 = 121",
          "Encrypt B2 (111100): C2 = 31*1 + 62*1 + 14*1 + 90*1 = 197",
          "Encrypt B3 (101110): C3 = 31*1 + 14*1 + 90*1 + 70*1 = 205"
        ],
        "finalAnswer": "Public Key a = {31, 62, 14, 90, 70, 30}; Ciphertext C = {121, 197, 205}",
        "verification": "Each modular reduction and block dot-product verified mathematically.",
        "calculatorType": "knapsack",
        "calculatorPreset": {
          "a": "31,62,14,90,70,30",
          "s": 121
        }
      }
    ],
    "quickRevision": {
      "keyPoints": [
        "Private Key: super-increasing vector b, modulus m > sum(bi), multiplier n coprime to m.",
        "Public Key: ai = (bi * n) mod m.",
        "Encryption: partition plaintext into k-bit chunks, compute dot product C = sum(xi * ai).",
        "Public knapsack is NOT super-increasing."
      ],
      "keywords": [
        "Merkle-Hellman",
        "Super-increasing private key",
        "Modular disguise",
        "Public key ai = (bi * n) mod m",
        "Dot product encryption"
      ],
      "formulas": [
        "m > sum(bi)",
        "gcd(n, m) = 1",
        "ai = (bi * n) mod m",
        "C = sum(xi * ai)"
      ],
      "diagramElements": [
        "Block diagram of Merkle-Hellman key transformation",
        "Plaintext partitioning into k-bit blocks"
      ],
      "examinerTraps": [
        "Do not forget modulo m reduction when calculating public key elements!"
      ]
    },
    "qText": "Given a super-increasing knapsack private key with multiplier n and modulus m, determine the public key and encrypt the binary plaintext.",
    "examReadyAnswer": "I. INTRODUCTION\nThe Merkle-Hellman knapsack cryptosystem creates an asymmetric trapdoor by taking an easy-to-solve super-increasing knapsack (private key) and disguising it as a hard-to-solve general knapsack (public key) using modular arithmetic.\n\n--------------------------------------------------\nII. COMPLETE STEP-BY-STEP NUMERICAL DERIVATION\nGiven:\n\u2022 Super-increasing private knapsack: b = {1, 2, 4, 10, 20, 40} (k = 6 elements)\n\u2022 Modulus: m = 110 (Note: Sum(bi) = 1+2+4+10+20+40 = 77 < 110, condition holds)\n\u2022 Multiplier: n = 31 (gcd(31, 110) = 1, condition holds)\n\u2022 Plaintext: 100100111100101110 (18 bits total)\n\nStep 1: Compute Public Key a = {a1, a2, a3, a4, a5, a6}\nFormula: ai = (bi * n) mod m = (bi * 31) mod 110\n\u2022 a1 = (1 * 31) mod 110 = 31 mod 110 = 31\n\u2022 a2 = (2 * 31) mod 110 = 62 mod 110 = 62\n\u2022 a3 = (4 * 31) mod 110 = 124 mod 110 = 14\n\u2022 a4 = (10 * 31) mod 110 = 310 mod 110 = 90  (since 310 - 2*110 = 90)\n\u2022 a5 = (20 * 31) mod 110 = 620 mod 110 = 70  (since 620 - 5*110 = 70)\n\u2022 a6 = (40 * 31) mod 110 = 1240 mod 110 = 30 (since 1240 - 11*110 = 30)\n\nPublic Key:\na = {31, 62, 14, 90, 70, 30}\n\nStep 2: Plaintext Partitioning\nThe plaintext has 18 bits. Since k = 6, divide into 3 blocks of 6 bits:\n\u2022 Block 1: x^(1) = [1, 0, 0, 1, 0, 0]\n\u2022 Block 2: x^(2) = [1, 1, 1, 1, 0, 0]\n\u2022 Block 3: x^(3) = [1, 0, 1, 1, 1, 0]\n\nStep 3: Ciphertext Computation\nFormula: C = sum(xi * ai) for each 6-bit block:\n\u2022 Block 1 (100100):\n  C1 = 1(31) + 0(62) + 0(14) + 1(90) + 0(70) + 0(30)\n     = 31 + 90 = 121\n\n\u2022 Block 2 (111100):\n  C2 = 1(31) + 1(62) + 1(14) + 1(90) + 0(70) + 0(30)\n     = 31 + 62 + 14 + 90 = 197\n\n\u2022 Block 3 (101110):\n  C3 = 1(31) + 0(62) + 1(14) + 1(90) + 1(70) + 0(30)\n     = 31 + 14 + 90 + 70 = 205\n\nFinal Output:\n\u2022 Public Key: a = {31, 62, 14, 90, 70, 30}\n\u2022 Ciphertext Blocks: C = {121, 197, 205}"
  },
  {
    "groupId": "GRP-M3-RSA-01",
    "masterQuestionTitle": "With a neat general diagram, illustrate and explain the algorithms used in the RSA cryptosystem (Key Generation, Encryption, and Decryption).",
    "module": 3,
    "topic": "RSA Cryptosystem",
    "subtopic": "RSA Algorithm & Architecture",
    "priority": "P0",
    "uniquePaperCount": 2,
    "totalApplicablePapers": 9,
    "frequencyPct": 22.2,
    "historicalFrequency": "2/9 unique papers (22.2%)",
    "historicalPapers": [
      "P4: Feb/Mar 2022 (10M)",
      "P7: Dec 2023/Jan 2024 (10M)"
    ],
    "historicalMarks": "10M",
    "variants": [
      {
        "qId": "Q026",
        "paperCode": "P4-Q026",
        "wording": "With neat general diagram, illustrate the algorithms used in RSA.",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Diagram & Algorithm"
      },
      {
        "qId": "Q027",
        "paperCode": "P7-Q027",
        "wording": "With neat general diagram, illustrate the algorithms used in RSA.",
        "session": "December 2023/January 2024",
        "year": 2024,
        "marks": 10,
        "paperId": "P7",
        "pdfPage": 7,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_07.png",
        "type": "Diagram & Algorithm"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_33_Attachment109.png",
      "source": "AS_.ppt, Slide 33 (Tejonidhi M R, MCE Hassan)",
      "caption": "General RSA algorithm architecture: Key generation, encryption, and decryption."
    },
    "svgType": "rsa-flow",
    "notesSource": "AS_.ppt, Slides 33\u201336 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 33\u201336 - RSA Algorithm (Rivest, Shamir, Adleman):\n- Most widely used public-key algorithm.\n- Security relies on the difficulty of finding the prime factors of a composite number.\n- Key Generation:\n  1. Select two large primes p and q (p != q).\n  2. Compute modulus n = p * q.\n  3. Compute Euler's totient phi(n) = (p - 1) * (q - 1).\n  4. Select integer e such that gcd(e, phi(n)) = 1 and 1 < e < phi(n).\n  5. Calculate private exponent d = e^-1 mod phi(n) using Extended Euclidean algorithm (e * d = 1 mod phi(n)).\n  6. Public Key: PU = {e, n}\n  7. Private Key: PR = {d, n}\n- Encryption: Ciphertext C = M^e mod n (where plaintext M < n).\n- Decryption: Plaintext M = C^d mod n.",
    "masterAnswer": "I. INTRODUCTION & SECURITY BASIS\nThe RSA cryptosystem, introduced in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman at MIT, is the premier asymmetric cipher used for secure internet communication, digital signatures, and key exchange.\nSecurity Basis: Integer Factorization Problem. While multiplying two prime numbers p and q is computationally easy, factoring their product n = pq back into p and q when n is 2048+ bits is computationally infeasible.\n\n--------------------------------------------------\nII. THE THREE ALGORITHMS IN RSA\n1. KEY GENERATION ALGORITHM:\n   \u2022 Step 1: Select two distinct, large prime numbers p and q.\n   \u2022 Step 2: Compute the modulus:\n     n = p * q\n   \u2022 Step 3: Compute Euler's totient function:\n     phi(n) = (p - 1) * (q - 1)\n   \u2022 Step 4: Choose a public exponent 'e' such that:\n     1 < e < phi(n)  and  gcd(e, phi(n)) = 1 (i.e., e is coprime to phi(n)).\n   \u2022 Step 5: Compute the private exponent 'd' such that:\n     d * e = 1 (mod phi(n))   <=>   d = e^-1 mod phi(n)\n     (Computed efficiently using the Extended Euclidean Algorithm).\n   \u2022 Public Key: PU = {e, n} (Distributed publicly)\n   \u2022 Private Key: PR = {d, n} (Kept secret by recipient)\n\n2. ENCRYPTION ALGORITHM (Sender Alice):\n   \u2022 Input: Plaintext message M represented as an integer such that 0 <= M < n.\n   \u2022 Operation: Compute Ciphertext C using Bob's public key {e, n}:\n     C = M^e mod n\n\n3. DECRYPTION ALGORITHM (Receiver Bob):\n   \u2022 Input: Ciphertext integer C.\n   \u2022 Operation: Recover Plaintext M using Bob's private key {d, n}:\n     M = C^d mod n\n\n--------------------------------------------------\nIII. MATHEMATICAL CORRECTNESS PROOF\nBy definition of d: e * d = 1 (mod phi(n)), meaning e * d = k * phi(n) + 1 for some integer k.\nDecryption:\nC^d = (M^e)^d = M^(ed) = M^(k*phi(n) + 1) = (M^(phi(n)))^k * M (mod n)\nBy Euler's Totient Theorem: M^(phi(n)) = 1 (mod n) for any M coprime to n.\nTherefore:\nC^d = (1)^k * M = M (mod n).\nPlaintext is recovered perfectly!",
    "quickRevision": {
      "keyPoints": [
        "Based on integer factorization hardness of n = pq.",
        "Modulus n = p*q; totient phi(n) = (p-1)*(q-1).",
        "Public exponent e is coprime to phi(n).",
        "Private exponent d = e^-1 mod phi(n) (via Extended Euclidean).",
        "Encryption: C = M^e mod n; Decryption: M = C^d mod n.",
        "Plaintext message M must be strictly less than n."
      ],
      "keywords": [
        "Rivest-Shamir-Adleman",
        "Integer factorization",
        "Modulus n = pq",
        "phi(n) = (p-1)(q-1)",
        "gcd(e, phi(n)) = 1",
        "d = e^-1 mod phi(n)",
        "C = M^e mod n",
        "M = C^d mod n"
      ],
      "formulas": [
        "n = p * q",
        "phi(n) = (p - 1) * (q - 1)",
        "e * d = 1 (mod phi(n))",
        "C = M^e mod n",
        "M = C^d mod n"
      ],
      "diagramElements": [
        "Key Generation block producing {e, n} and {d, n}",
        "Sender block computing C = M^e mod n",
        "Receiver block computing M = C^d mod n",
        "Channel showing Ciphertext C"
      ],
      "examinerTraps": [
        "Private exponent d is computed modulo phi(n), NOT modulo n! Writing d = e^-1 mod n is a major deduction."
      ]
    },
    "qText": "With a neat general diagram, illustrate and explain the algorithms used in the RSA cryptosystem (Key Generation, Encryption, and Decryption).",
    "examReadyAnswer": "I. INTRODUCTION & SECURITY BASIS\nThe RSA cryptosystem, introduced in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman at MIT, is the premier asymmetric cipher used for secure internet communication, digital signatures, and key exchange.\nSecurity Basis: Integer Factorization Problem. While multiplying two prime numbers p and q is computationally easy, factoring their product n = pq back into p and q when n is 2048+ bits is computationally infeasible.\n\n--------------------------------------------------\nII. THE THREE ALGORITHMS IN RSA\n1. KEY GENERATION ALGORITHM:\n   \u2022 Step 1: Select two distinct, large prime numbers p and q.\n   \u2022 Step 2: Compute the modulus:\n     n = p * q\n   \u2022 Step 3: Compute Euler's totient function:\n     phi(n) = (p - 1) * (q - 1)\n   \u2022 Step 4: Choose a public exponent 'e' such that:\n     1 < e < phi(n)  and  gcd(e, phi(n)) = 1 (i.e., e is coprime to phi(n)).\n   \u2022 Step 5: Compute the private exponent 'd' such that:\n     d * e = 1 (mod phi(n))   <=>   d = e^-1 mod phi(n)\n     (Computed efficiently using the Extended Euclidean Algorithm).\n   \u2022 Public Key: PU = {e, n} (Distributed publicly)\n   \u2022 Private Key: PR = {d, n} (Kept secret by recipient)\n\n2. ENCRYPTION ALGORITHM (Sender Alice):\n   \u2022 Input: Plaintext message M represented as an integer such that 0 <= M < n.\n   \u2022 Operation: Compute Ciphertext C using Bob's public key {e, n}:\n     C = M^e mod n\n\n3. DECRYPTION ALGORITHM (Receiver Bob):\n   \u2022 Input: Ciphertext integer C.\n   \u2022 Operation: Recover Plaintext M using Bob's private key {d, n}:\n     M = C^d mod n\n\n--------------------------------------------------\nIII. MATHEMATICAL CORRECTNESS PROOF\nBy definition of d: e * d = 1 (mod phi(n)), meaning e * d = k * phi(n) + 1 for some integer k.\nDecryption:\nC^d = (M^e)^d = M^(ed) = M^(k*phi(n) + 1) = (M^(phi(n)))^k * M (mod n)\nBy Euler's Totient Theorem: M^(phi(n)) = 1 (mod n) for any M coprime to n.\nTherefore:\nC^d = (1)^k * M = M (mod n).\nPlaintext is recovered perfectly!"
  },
  {
    "groupId": "GRP-M3-RSA-02",
    "masterQuestionTitle": "Perform RSA key generation, encryption, and decryption using the given numerical parameters.",
    "module": 3,
    "topic": "RSA Cryptosystem",
    "subtopic": "RSA Numerical Calculations",
    "priority": "P0",
    "uniquePaperCount": 6,
    "totalApplicablePapers": 9,
    "frequencyPct": 66.7,
    "historicalFrequency": "6/9 unique papers (66.7% - HIGHEST RECURRING NUMERICAL)",
    "historicalPapers": [
      "P8: Dec 2019 (8M)",
      "P3: Jan 2021 (8M)",
      "P9: Feb/Mar 2025 (10M)",
      "P6: Feb/Mar 2023 (6M)",
      "P1: Dec 2018 (8M)",
      "P5: Sept/Oct 2022 (10M)"
    ],
    "historicalMarks": "6M, 8M, 10M",
    "variants": [
      {
        "qId": "Q020",
        "paperCode": "P8-Q020",
        "wording": "Perform RSA encryption and decryption using the following information: P = 11, Q = 3, M = 5.",
        "session": "December 2019",
        "year": 2019,
        "marks": 8,
        "paperId": "P8",
        "pdfPage": 8,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_08.png",
        "type": "Numerical Calculation"
      },
      {
        "qId": "Q021",
        "paperCode": "P3-Q021",
        "wording": "Perform encryption and decryption for the following using RSA algorithm: Given public key = {7, 187}, private key = {23, 187} and M = 88.",
        "session": "January 2021",
        "year": 2021,
        "marks": 8,
        "paperId": "P3",
        "pdfPage": 3,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_03.png",
        "type": "Numerical Calculation"
      },
      {
        "qId": "Q022",
        "paperCode": "P9-Q022",
        "wording": "Encrypt and decrypt message 5 using the RSA algorithm, take p = 7 and q = 11.",
        "session": "February/March 2025",
        "year": 2025,
        "marks": 10,
        "paperId": "P9",
        "pdfPage": 9,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_09.png",
        "type": "Numerical Calculation"
      },
      {
        "qId": "Q023",
        "paperCode": "P6-Q023",
        "wording": "Determine the public and private keys for the given prime numbers (P = 3, Q = 11). Encrypt the message m = 2 using RSA.",
        "session": "February/March 2023",
        "year": 2023,
        "marks": 6,
        "paperId": "P6",
        "pdfPage": 6,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_06.png",
        "type": "Numerical Calculation"
      },
      {
        "qId": "Q024",
        "paperCode": "P1-Q024",
        "wording": "Using RSA algorithm, find the encryption key and decryption key, and perform encryption and decryption: P = 5, q = 11, M = 18.",
        "session": "December 2018",
        "year": 2018,
        "marks": 8,
        "paperId": "P1",
        "pdfPage": 1,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_01.png",
        "type": "Numerical Calculation"
      },
      {
        "qId": "Q025",
        "paperCode": "P5-Q025",
        "wording": "Perform encryption and decryption using RSA algorithm for the given data: p = 17, q = 11, e = 7 and Message = 88.",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Numerical Calculation"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_45_Attachment8.png",
      "source": "AS_.ppt, Slide 45 (Tejonidhi M R, MCE Hassan)",
      "caption": "Step-by-step arithmetic for RSA numerical problem from classroom notes."
    },
    "svgType": "rsa-flow",
    "notesSource": "AS_.ppt, Slides 37\u201346 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 37\u201346 - Step-by-Step RSA Numerical Solution Procedure:\nStep 1: Compute modulus n = p * q.\nStep 2: Compute totient phi(n) = (p - 1) * (q - 1).\nStep 3: Select public exponent e: gcd(e, phi(n)) = 1 and 1 < e < phi(n).\nStep 4: Compute private exponent d: (d * e) mod phi(n) = 1.\n        Extended Euclidean algorithm: d = e^-1 mod phi(n).\nStep 5: Encryption: C = M^e mod n. Use square-and-multiply method.\nStep 6: Decryption: M = C^d mod n. Use square-and-multiply method. Verify M matches original message.",
    "masterAnswer": "I. STANDARD 5-STEP RSA CALCULATION PROCEDURE\nAll RSA numerical problems follow the exact same 5-step mathematical template:\n1. Compute Modulus: n = p * q\n2. Compute Totient: phi(n) = (p - 1) * (q - 1)\n3. Select/Verify Public Exponent 'e': Check gcd(e, phi(n)) == 1.\n4. Calculate Private Exponent 'd': d = e^-1 mod phi(n) such that (e * d) mod phi(n) = 1.\n5. Perform Encryption & Decryption via Modular Exponentiation:\n   \u2022 Ciphertext: C = M^e mod n\n   \u2022 Plaintext: M = C^d mod n\n\n--------------------------------------------------\nII. VERIFIED INDEPENDENT CALCULATIONS FOR ALL HISTORICAL PYQ VARIANTS\n(Refer to the dedicated calculation cards below for each exam session).",
    "mathSolutions": [
      {
        "variantLabel": "Variant 1 (P8: Dec 2019) \u2014 P=11, Q=3, M=5",
        "given": "p = 11, q = 3, Plaintext M = 5",
        "required": "Keys PU, PR, Ciphertext C, Decrypted Plaintext M",
        "formula": "n=pq, phi(n)=(p-1)(q-1), ed=1 mod phi(n), C=M^e mod n, M=C^d mod n",
        "steps": [
          "Step 1: n = p * q = 11 * 3 = 33",
          "Step 2: phi(n) = (11 - 1) * (3 - 1) = 10 * 2 = 20",
          "Step 3: Choose e coprime to 20: e = 3 (since gcd(3, 20) = 1)",
          "Step 4: Compute d = 3^-1 mod 20. Look for k such that (k*20 + 1) is divisible by 3: k=1 -> 21 / 3 = 7. Thus d = 7. (Check: 3 * 7 = 21 = 1 mod 20).",
          "Public Key: {e, n} = {3, 33}; Private Key: {d, n} = {7, 33}",
          "Step 5 (Encryption): C = M^e mod n = 5^3 mod 33 = 125 mod 33. 125 = 3 * 33 + 26. Thus C = 26.",
          "Step 6 (Decryption): M = C^d mod n = 26^7 mod 33. Note 26 = -7 mod 33. (-7)^7 = - (7^7) mod 33. 7^2 = 49 = 16. 7^4 = 16^2 = 256 = 25 = -8. 7^7 = 7^4 * 7^2 * 7 = (-8) * 16 * 7 = -128 * 7 = 4 * 7 = 28 = -5 mod 33. -(-5) = 5 mod 33. Thus M = 5."
        ],
        "finalAnswer": "PU = {3, 33}, PR = {7, 33}, Ciphertext C = 26, Decrypted Message M = 5",
        "verification": "Decrypted message M=5 matches input message M=5.",
        "calculatorType": "rsa",
        "calculatorPreset": {
          "p": 11,
          "q": 3,
          "e": 3,
          "m": 5
        }
      },
      {
        "variantLabel": "Variant 2 (P3: Jan 2021) \u2014 PU={7, 187}, PR={23, 187}, M=88",
        "given": "Public Key = {7, 187}, Private Key = {23, 187}, Message M = 88",
        "required": "Encryption (C) and Decryption (M)",
        "formula": "C = M^e mod n, M = C^d mod n",
        "steps": [
          "Here n = 187 (p=17, q=11), e = 7, d = 23, M = 88.",
          "Encryption: C = 88^7 mod 187.",
          "Using modular reduction: 88^2 = 7744 = 41 * 187 + 77 = 77 mod 187.",
          "88^4 = 77^2 = 5929 = 31 * 187 + 132 = 132 mod 187.",
          "88^7 = 88^4 * 88^2 * 88^1 = 132 * 77 * 88 mod 187.",
          "132 * 77 = 10164 = 54 * 187 + 66 = 66 mod 187.",
          "66 * 88 = 5808 = 31 * 187 + 11 = 11 mod 187. -> C = 11.",
          "Decryption: M = 11^23 mod 187. 11^2 = 121 mod 187.",
          "11^4 = 121^2 = 14641 = 55 mod 187. 11^8 = 55^2 = 3025 = 33 mod 187.",
          "11^16 = 33^2 = 1089 = 154 mod 187.",
          "11^23 = 11^16 * 11^4 * 11^2 * 11^1 = 154 * 55 * 121 * 11 mod 187 = 88 mod 187."
        ],
        "finalAnswer": "Ciphertext C = 11, Decrypted Message M = 88",
        "verification": "11^23 mod 187 = 88. Exact match verified.",
        "calculatorType": "rsa",
        "calculatorPreset": {
          "p": 17,
          "q": 11,
          "e": 7,
          "m": 88
        }
      },
      {
        "variantLabel": "Variant 3 (P9: Feb/Mar 2025) \u2014 p=7, q=11, M=5",
        "given": "p = 7, q = 11, Message M = 5",
        "required": "Key generation, encryption and decryption",
        "formula": "n=pq, phi(n)=(p-1)(q-1), C=M^e mod n, M=C^d mod n",
        "steps": [
          "Step 1: n = p * q = 7 * 11 = 77",
          "Step 2: phi(n) = (7 - 1) * (11 - 1) = 6 * 10 = 60",
          "Step 3: Select public exponent e coprime to 60. Choose e = 13 (gcd(13, 60) = 1).",
          "Step 4: Compute d = 13^-1 mod 60. Using Extended Euclidean: 13 * 37 = 481 = 8 * 60 + 1 = 1 mod 60. Thus d = 37.",
          "Public Key: {13, 77}, Private Key: {37, 77}",
          "Step 5 (Encryption): C = 5^13 mod 77. 5^2 = 25, 5^4 = 625 = 9 mod 77. 5^8 = 9^2 = 81 = 4 mod 77. 5^13 = 5^8 * 5^4 * 5 = 4 * 9 * 5 = 180 = 26 mod 77. -> C = 26.",
          "Step 6 (Decryption): M = 26^37 mod 77 = 5."
        ],
        "finalAnswer": "PU = {13, 77}, PR = {37, 77}, Ciphertext C = 26, Decrypted Message M = 5",
        "verification": "Decrypted message M=5 matches input message M=5.",
        "calculatorType": "rsa",
        "calculatorPreset": {
          "p": 7,
          "q": 11,
          "e": 13,
          "m": 5
        }
      },
      {
        "variantLabel": "Variant 4 (P6: Feb/Mar 2023) \u2014 p=3, q=11, m=2",
        "given": "p = 3, q = 11, message m = 2",
        "required": "Public and private keys, Ciphertext C",
        "formula": "n=pq=33, phi(n)=(p-1)(q-1)=20, choose e, d=e^-1 mod 20, C=m^e mod n",
        "steps": [
          "Step 1: n = 3 * 11 = 33",
          "Step 2: phi(n) = (3 - 1) * (11 - 1) = 2 * 10 = 20",
          "Step 3: Select e coprime to 20: e = 7 (gcd(7, 20) = 1).",
          "Step 4: d = 7^-1 mod 20: 7 * 3 = 21 = 1 mod 20 -> d = 3.",
          "Public Key: {7, 33}, Private Key: {3, 33}",
          "Step 5 (Encryption): C = 2^7 mod 33 = 128 mod 33. 128 = 3 * 33 + 29 -> C = 29.",
          "Step 6 (Decryption verification): M = 29^3 mod 33 = (-4)^3 mod 33 = -64 mod 33 = 2 mod 33. M = 2."
        ],
        "finalAnswer": "PU = {7, 33}, PR = {3, 33}, Ciphertext C = 29, Decrypted message = 2",
        "verification": "29^3 mod 33 = 2. Verified.",
        "calculatorType": "rsa",
        "calculatorPreset": {
          "p": 3,
          "q": 11,
          "e": 7,
          "m": 2
        }
      },
      {
        "variantLabel": "Variant 5 (P1: Dec 2018) \u2014 p=5, q=11, M=18",
        "given": "p = 5, q = 11, Message M = 18",
        "required": "Encryption key, decryption key, C, and M",
        "formula": "n=pq=55, phi(n)=40, ed=1 mod 40, C=M^e mod n, M=C^d mod n",
        "steps": [
          "Step 1: n = 5 * 11 = 55",
          "Step 2: phi(n) = (5 - 1) * (11 - 1) = 4 * 10 = 40",
          "Step 3: Select e coprime to 40: e = 3 (gcd(3, 40) = 1).",
          "Step 4: d = 3^-1 mod 40: 3 * 27 = 81 = 2 * 40 + 1 = 1 mod 40 -> d = 27.",
          "Encryption Key PU = {3, 55}; Decryption Key PR = {27, 55}",
          "Step 5 (Encryption): C = 18^3 mod 55. 18^2 = 324 = 5 * 55 + 49 = 49 = -6 mod 55. C = -6 * 18 = -108 = -108 + 110 = 2 mod 55 -> C = 2.",
          "Step 6 (Decryption): M = 2^27 mod 55. 2^5 = 32 = -23 mod 55. 2^10 = (-23)^2 = 529 = 34 = -21. 2^20 = (-21)^2 = 441 = 1 mod 55! Then 2^27 = 2^20 * 2^7 = 1 * 128 = 128 = 2 * 55 + 18 = 18 mod 55 -> M = 18."
        ],
        "finalAnswer": "PU = {3, 55}, PR = {27, 55}, Ciphertext C = 2, Decrypted Message M = 18",
        "verification": "2^27 mod 55 = 18. Perfect match.",
        "calculatorType": "rsa",
        "calculatorPreset": {
          "p": 5,
          "q": 11,
          "e": 3,
          "m": 18
        }
      },
      {
        "variantLabel": "Variant 6 (P5: Sept/Oct 2022) \u2014 p=17, q=11, e=7, Message=88",
        "given": "p = 17, q = 11, e = 7, Message = 88",
        "required": "Complete encryption and decryption",
        "formula": "n=pq=187, phi(n)=(16)(10)=160, d=7^-1 mod 160=23, C=88^7 mod 187, M=C^23 mod 187",
        "steps": [
          "Step 1: n = 17 * 11 = 187",
          "Step 2: phi(n) = (17 - 1) * (11 - 1) = 16 * 10 = 160",
          "Step 3: Given e = 7. Verify gcd(7, 160) = 1. (160 = 22 * 7 + 6, 7 = 6 + 1 -> coprime).",
          "Step 4: Compute d = 7^-1 mod 160 using Extended Euclidean Algorithm:",
          "160 = 22 * 7 + 6 => 6 = 160 - 22 * 7",
          "7 = 1 * 6 + 1 => 1 = 7 - 1 * (160 - 22 * 7) = 23 * 7 - 1 * 160",
          "Thus 7 * 23 = 1 mod 160 => d = 23.",
          "Public Key = {7, 187}, Private Key = {23, 187}",
          "Step 5 (Encryption): C = 88^7 mod 187.",
          "88^2 = 7744 = 41 * 187 + 77 = 77 mod 187.",
          "88^4 = 77^2 = 5929 = 31 * 187 + 132 = 132 mod 187.",
          "88^7 = 88^4 * 88^2 * 88 = 132 * 77 * 88 mod 187 = 66 * 88 = 5808 = 31 * 187 + 11 = 11 mod 187. -> C = 11.",
          "Step 6 (Decryption): M = 11^23 mod 187 = 88 mod 187. (Verified identical to Variant 2)."
        ],
        "finalAnswer": "Public Key = {7, 187}, Private Key = {23, 187}, Ciphertext C = 11, Decrypted Message M = 88",
        "verification": "11^23 mod 187 = 88. Verified.",
        "calculatorType": "rsa",
        "calculatorPreset": {
          "p": 17,
          "q": 11,
          "e": 7,
          "m": 88
        }
      }
    ],
    "quickRevision": {
      "keyPoints": [
        "Always follow 5 steps: n -> phi(n) -> e -> d -> C and M.",
        "d is computed modulo phi(n), NOT modulo n.",
        "Use square-and-multiply method to compute large powers in modular arithmetic.",
        "Always show the decryption step to verify M recovers the original message!"
      ],
      "keywords": [
        "p, q primes",
        "Modulus n = pq",
        "Euler totient phi(n)",
        "Extended Euclidean d = e^-1 mod phi(n)",
        "C = M^e mod n",
        "M = C^d mod n"
      ],
      "formulas": [
        "n = p * q",
        "phi(n) = (p - 1)(q - 1)",
        "e * d = 1 (mod phi(n))",
        "C = M^e mod n",
        "M = C^d mod n"
      ],
      "diagramElements": [
        "Summary table showing parameters for all 6 historical variants"
      ],
      "examinerTraps": [
        "Check that e is coprime to phi(n).",
        "Do not compute 88^7 directly; always apply modular reduction after each square/multiply step."
      ]
    },
    "qText": "Perform RSA key generation, encryption, and decryption using the given numerical parameters.",
    "examReadyAnswer": "I. STANDARD 5-STEP RSA CALCULATION PROCEDURE\nAll RSA numerical problems follow the exact same 5-step mathematical template:\n1. Compute Modulus: n = p * q\n2. Compute Totient: phi(n) = (p - 1) * (q - 1)\n3. Select/Verify Public Exponent 'e': Check gcd(e, phi(n)) == 1.\n4. Calculate Private Exponent 'd': d = e^-1 mod phi(n) such that (e * d) mod phi(n) = 1.\n5. Perform Encryption & Decryption via Modular Exponentiation:\n   \u2022 Ciphertext: C = M^e mod n\n   \u2022 Plaintext: M = C^d mod n\n\n--------------------------------------------------\nII. VERIFIED INDEPENDENT CALCULATIONS FOR ALL HISTORICAL PYQ VARIANTS\n(Refer to the dedicated calculation cards below for each exam session)."
  },
  {
    "groupId": "GRP-M3-RSA-03",
    "masterQuestionTitle": "Mention, define, and explain the different types of potential attacks against the RSA cryptosystem.",
    "module": 3,
    "topic": "RSA Cryptosystem",
    "subtopic": "RSA Attacks & Security",
    "priority": "P1",
    "uniquePaperCount": 2,
    "totalApplicablePapers": 9,
    "frequencyPct": 22.2,
    "historicalFrequency": "2/9 unique papers (22.2%)",
    "historicalPapers": [
      "P2: Jan/Feb 2020 (6M)",
      "P5: Sept/Oct 2022 (5M)"
    ],
    "historicalMarks": "5M, 6M",
    "variants": [
      {
        "qId": "Q028",
        "paperCode": "P2-Q028",
        "wording": "What are the potential attacks on RSA algorithm?",
        "session": "January/February 2020",
        "year": 2020,
        "marks": 6,
        "paperId": "P2",
        "pdfPage": 2,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_02.png",
        "type": "Theory & Classification"
      },
      {
        "qId": "Q029",
        "paperCode": "P5-Q029",
        "wording": "Mention and define different types of attacks vulnerable to RSA cryptosystem.",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 5,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Taxonomy & Definitions"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_55_Attachment84.png",
      "source": "AS_.ppt, Slide 55 (Tejonidhi M R, MCE Hassan)",
      "caption": "Taxonomy of RSA attacks from classroom lecture slides."
    },
    "svgType": "rsa-flow",
    "notesSource": "AS_.ppt, Slides 55\u201364 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 55\u201364 - Attacks on RSA:\nRSA vulnerabilities are categorized into six major attack vectors:\n1. Factorization Attacks (Mathematical attacks):\n   - Trying to factor modulus n into p and q.\n   - If p and q are found, phi(n) = (p-1)(q-1) is calculated, and private key d = e^-1 mod phi(n) is determined.\n2. Short / Small Encryption Exponent Attack:\n   - Using small e like e = 3.\n   - If the same message M is encrypted to 3 entities with different moduli (n1, n2, n3), Chinese Remainder Theorem solves M^3 directly over the integers.\n3. Small Decryption Exponent Attack:\n   - Choosing small d to speed up decryption (d < 1/3 * n^(1/4)). Wiener's attack reconstructs d in polynomial time.\n4. Chosen-Ciphertext Attack (CCA):\n   - Exploits the multiplicative homomorphic property of RSA: E(M1) * E(M2) = E(M1 * M2) mod n.\n5. Timing Attacks (Side-channel attacks):\n   - Measuring execution time during modular exponentiation to infer private key bits.\n6. Common Modulus Attack:\n   - Multiple users sharing modulus n with coprime exponents e1, e2.",
    "masterAnswer": "I. INTRODUCTION\nAlthough RSA is provably secure when implemented with adequate parameter sizes, flawed implementations or poor parameter choices expose it to several severe attacks. These are classified into mathematical, architectural, and side-channel vulnerabilities.\n\n--------------------------------------------------\nII. TAXONOMY OF RSA ATTACKS\n1. FACTORIZATION ATTACK (MATHEMATICAL):\n   \u2022 Vulnerability: If an attacker can factor modulus n into its prime factors p and q, they can compute phi(n) = (p - 1)(q - 1) and calculate the private key d = e^-1 mod phi(n).\n   \u2022 Methods: General Number Field Sieve (GNFS), Quadratic Sieve, Pollard's rho algorithm.\n   \u2022 Countermeasure: Use large primes such that n >= 2048 bits; ensure (p - 1) and (q - 1) do not have only small prime factors.\n\n2. SHORT ENCRYPTION EXPONENT ATTACK (COPPERSMITH'S / CRT ATTACK):\n   \u2022 Vulnerability: Choosing a very small public exponent e (e.g. e = 3) to minimize encryption time.\n   \u2022 Mechanism: If Alice sends the same message M to three different recipients using e = 3 and moduli n1, n2, n3:\n     C1 = M^3 mod n1, C2 = M^3 mod n2, C3 = M^3 mod n3.\n     An attacker uses the Chinese Remainder Theorem (CRT) to compute C' = M^3 mod (n1*n2*n3). Since M < ni, M^3 < n1*n2*n3. The attacker simply extracts the real cube root over the integers without modular reduction!\n   \u2022 Countermeasure: Use e = 65537 (2^16 + 1); apply randomized padding (OAEP).\n\n3. SMALL DECRYPTION EXPONENT ATTACK (WIENER'S THEOREM):\n   \u2022 Vulnerability: Choosing small d to accelerate decryption on smart cards.\n   \u2022 Mechanism: Wiener proved that if d < (1/3) * n^(1/4), the private key d can be recovered in polynomial time using the continued fraction expansion of e/n.\n   \u2022 Countermeasure: Ensure d is sufficiently large (d > n^0.292).\n\n4. CHOSEN-CIPHERTEXT ATTACK (HOMOMORPHIC ATTACK):\n   \u2022 Vulnerability: RSA is multiplicatively homomorphic:\n     (M1^e mod n) * (M2^e mod n) = (M1 * M2)^e mod n.\n   \u2022 Mechanism: To decrypt target ciphertext C = M^e mod n, an attacker chooses random r, computes C' = C * (r^e mod n) = (M * r)^e mod n, and asks the decryption oracle for the plaintext of C'. The oracle returns X = (M * r) mod n. The attacker computes M = X * r^-1 mod n.\n   \u2022 Countermeasure: Optimal Asymmetric Encryption Padding (OAEP), which randomizes the message before exponentiation.\n\n5. TIMING ATTACKS (SIDE-CHANNEL):\n   \u2022 Vulnerability: Standard modular exponentiation algorithms (square-and-multiply) take different times depending on whether each private key bit is 0 or 1.\n   \u2022 Mechanism: Measuring clock cycles allows an attacker to deduce each bit of d.\n   \u2022 Countermeasure: Constant-time implementations, or cryptographic blinding: C' = C * (r^e mod n); decrypt C' to get M' = C'^d = M * r mod n; then multiply by r^-1.\n\n6. COMMON MODULUS ATTACK:\n   \u2022 Vulnerability: Multiple users share the same modulus n with different public exponents e1, e2 such that gcd(e1, e2) = 1.\n   \u2022 Mechanism: The same message encrypted with both exponents can be recovered using Extended Euclidean coefficients without knowing private keys.",
    "quickRevision": {
      "keyPoints": [
        "Factorization: Factoring n gives phi(n) and d. Solved by >= 2048-bit keys.",
        "Small e attack: e=3 sent to 3 users allows CRT cube root extraction.",
        "Small d attack: Wiener's attack breaks d < 1/3 n^(1/4).",
        "Chosen-ciphertext: Exploits multiplicative homomorphism; solved by OAEP.",
        "Timing attacks: Side-channel clock timing; solved by random blinding."
      ],
      "keywords": [
        "Factorization (GNFS)",
        "Small e (CRT attack)",
        "Wiener's attack (small d)",
        "Chosen Ciphertext Attack (CCA)",
        "Multiplicative homomorphism",
        "OAEP padding",
        "Timing attack",
        "Blinding"
      ],
      "formulas": [
        "Wiener bound: d < 1/3 * n^(1/4)",
        "Homomorphism: E(M1)*E(M2) = E(M1*M2) mod n",
        "Blinding: C' = C * r^e mod n"
      ],
      "diagramElements": [
        "Taxonomy tree: Mathematical vs Implementation vs Side-Channel",
        "OAEP padding box diagram"
      ],
      "examinerTraps": [
        "Always state the specific countermeasure for each attack (e.g. OAEP for CCA, Blinding for timing attack)."
      ]
    },
    "qText": "Mention, define, and explain the different types of potential attacks against the RSA cryptosystem.",
    "examReadyAnswer": "I. INTRODUCTION\nAlthough RSA is provably secure when implemented with adequate parameter sizes, flawed implementations or poor parameter choices expose it to several severe attacks. These are classified into mathematical, architectural, and side-channel vulnerabilities.\n\n--------------------------------------------------\nII. TAXONOMY OF RSA ATTACKS\n1. FACTORIZATION ATTACK (MATHEMATICAL):\n   \u2022 Vulnerability: If an attacker can factor modulus n into its prime factors p and q, they can compute phi(n) = (p - 1)(q - 1) and calculate the private key d = e^-1 mod phi(n).\n   \u2022 Methods: General Number Field Sieve (GNFS), Quadratic Sieve, Pollard's rho algorithm.\n   \u2022 Countermeasure: Use large primes such that n >= 2048 bits; ensure (p - 1) and (q - 1) do not have only small prime factors.\n\n2. SHORT ENCRYPTION EXPONENT ATTACK (COPPERSMITH'S / CRT ATTACK):\n   \u2022 Vulnerability: Choosing a very small public exponent e (e.g. e = 3) to minimize encryption time.\n   \u2022 Mechanism: If Alice sends the same message M to three different recipients using e = 3 and moduli n1, n2, n3:\n     C1 = M^3 mod n1, C2 = M^3 mod n2, C3 = M^3 mod n3.\n     An attacker uses the Chinese Remainder Theorem (CRT) to compute C' = M^3 mod (n1*n2*n3). Since M < ni, M^3 < n1*n2*n3. The attacker simply extracts the real cube root over the integers without modular reduction!\n   \u2022 Countermeasure: Use e = 65537 (2^16 + 1); apply randomized padding (OAEP).\n\n3. SMALL DECRYPTION EXPONENT ATTACK (WIENER'S THEOREM):\n   \u2022 Vulnerability: Choosing small d to accelerate decryption on smart cards.\n   \u2022 Mechanism: Wiener proved that if d < (1/3) * n^(1/4), the private key d can be recovered in polynomial time using the continued fraction expansion of e/n.\n   \u2022 Countermeasure: Ensure d is sufficiently large (d > n^0.292).\n\n4. CHOSEN-CIPHERTEXT ATTACK (HOMOMORPHIC ATTACK):\n   \u2022 Vulnerability: RSA is multiplicatively homomorphic:\n     (M1^e mod n) * (M2^e mod n) = (M1 * M2)^e mod n.\n   \u2022 Mechanism: To decrypt target ciphertext C = M^e mod n, an attacker chooses random r, computes C' = C * (r^e mod n) = (M * r)^e mod n, and asks the decryption oracle for the plaintext of C'. The oracle returns X = (M * r) mod n. The attacker computes M = X * r^-1 mod n.\n   \u2022 Countermeasure: Optimal Asymmetric Encryption Padding (OAEP), which randomizes the message before exponentiation.\n\n5. TIMING ATTACKS (SIDE-CHANNEL):\n   \u2022 Vulnerability: Standard modular exponentiation algorithms (square-and-multiply) take different times depending on whether each private key bit is 0 or 1.\n   \u2022 Mechanism: Measuring clock cycles allows an attacker to deduce each bit of d.\n   \u2022 Countermeasure: Constant-time implementations, or cryptographic blinding: C' = C * (r^e mod n); decrypt C' to get M' = C'^d = M * r mod n; then multiply by r^-1.\n\n6. COMMON MODULUS ATTACK:\n   \u2022 Vulnerability: Multiple users share the same modulus n with different public exponents e1, e2 such that gcd(e1, e2) = 1.\n   \u2022 Mechanism: The same message encrypted with both exponents can be recovered using Extended Euclidean coefficients without knowing private keys."
  },
  {
    "groupId": "GRP-M3-RABIN-01",
    "masterQuestionTitle": "Illustrate and explain the complete Rabin cryptosystem (Key Generation, Encryption, and Decryption using the Chinese Remainder Theorem) with a neat diagram.",
    "module": 3,
    "topic": "Rabin Cryptosystem",
    "subtopic": "Rabin Algorithm & 4-Root Decryption",
    "priority": "P0",
    "uniquePaperCount": 5,
    "totalApplicablePapers": 9,
    "frequencyPct": 55.6,
    "historicalFrequency": "5/9 unique papers (55.6%)",
    "historicalPapers": [
      "P3: Jan 2021 (10M)",
      "P4: Feb/Mar 2022 (12M)",
      "P5: Sept/Oct 2022 (5M)",
      "P6: Feb/Mar 2023 (6M)",
      "P9: Feb/Mar 2025 (10M)"
    ],
    "historicalMarks": "5M, 6M, 10M, 12M",
    "variants": [
      {
        "qId": "Q030",
        "paperCode": "P3-Q030",
        "wording": "Explain the algorithm for key generation, encryption, and decryption using Rabin cryptosystem with neat diagram.",
        "session": "January 2021",
        "year": 2021,
        "marks": 10,
        "paperId": "P3",
        "pdfPage": 3,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_03.png",
        "type": "Algorithm & Diagram"
      },
      {
        "qId": "Q031",
        "paperCode": "P4-Q031",
        "wording": "Illustrate Rabin cryptosystem for encryption, decryption and key-generation algorithm.",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 12,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Comprehensive Algorithm"
      },
      {
        "qId": "Q032",
        "paperCode": "P5-Q032",
        "wording": "Explain how Rabin cryptosystem works?",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 5,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Working Mechanism"
      },
      {
        "qId": "Q033",
        "paperCode": "P6-Q033",
        "wording": "Illustrate with diagram the encryption, Decryption and Key generation process in the Rabin cryptosystem.",
        "session": "February/March 2023",
        "year": 2023,
        "marks": 6,
        "paperId": "P6",
        "pdfPage": 6,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_06.png",
        "type": "Diagram & Flow"
      },
      {
        "qId": "Q034",
        "paperCode": "P9-Q034",
        "wording": "Describe the Rabin cryptosystem encryption, decryption and key generation procedure.",
        "session": "February/March 2025",
        "year": 2025,
        "marks": 10,
        "paperId": "P9",
        "pdfPage": 9,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_09.png",
        "type": "Comprehensive Procedure"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/as_slide_68_Attachment108.png",
      "source": "AS_.ppt, Slide 68 (Tejonidhi M R, MCE Hassan)",
      "caption": "Rabin cryptosystem general architecture: Key generation, encryption, and 4-root CRT decryption."
    },
    "svgType": "rabin-flow",
    "notesSource": "AS_.ppt, Slides 65\u201373 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 65\u201373 - Rabin Cryptosystem (Michael O. Rabin, 1979):\n- Asymmetric cryptosystem whose security relies on the hardness of finding square roots modulo a composite integer n = pq.\n- Key Generation:\n  1. Choose two large prime numbers p and q such that p = 3 mod 4 and q = 3 mod 4. (Blum integers).\n  2. Modulus n = p * q.\n  3. Public Key = n.\n  4. Private Key = (p, q).\n- Encryption:\n  * Plaintext P < n.\n  * Ciphertext C = P^2 mod n.\n- Decryption:\n  * Receiver solves x^2 = C mod n using private key (p, q).\n  * Finds square roots mod p: a1 = + C^((p+1)/4) mod p, a2 = -a1 mod p.\n  * Finds square roots mod q: b1 = + C^((q+1)/4) mod q, b2 = -b1 mod q.\n  * Uses Chinese Remainder Theorem (CRT) to combine into 4 plaintext roots:\n    P1, P2, P3, P4.\n  * One of these 4 roots is the original plaintext P!",
    "masterAnswer": "I. INTRODUCTION & THEORETICAL BASIS\nThe Rabin cryptosystem, introduced by Michael O. Rabin in 1979, was the first asymmetric public-key cryptosystem with provable security: recovering the plaintext from ciphertext is computationally equivalent to factoring the public modulus n = pq.\nEven if an adversary has unlimited chosen-ciphertext attacks, breaking Rabin is mathematically as hard as factoring integers.\n\n--------------------------------------------------\nII. THE THREE RABIN ALGORITHMS\n1. KEY GENERATION ALGORITHM:\n   \u2022 Step 1: Select two distinct, large prime numbers p and q satisfying the Blum integer condition:\n     p = 3 (mod 4)  and  q = 3 (mod 4)\n     (This condition guarantees that square roots modulo p and q can be calculated via simple exponentiation).\n   \u2022 Step 2: Compute the public modulus:\n     n = p * q\n   \u2022 Step 3:\n     - Public Key: n (Announced to everyone)\n     - Private Key: (p, q) (Kept secret by receiver)\n\n2. ENCRYPTION ALGORITHM (Sender):\n   \u2022 Input: Plaintext message P, represented as an integer such that 0 <= P < n.\n   \u2022 Operation: Compute Ciphertext C by squaring modulo n:\n     C = P^2 mod n\n\n3. DECRYPTION ALGORITHM (Receiver via CRT):\n   The receiver must solve the quadratic congruence x^2 = C (mod n). Since n = pq, this splits into two independent congruences:\n   x^2 = C (mod p)   and   x^2 = C (mod q).\n\n   Step 3a: Compute square roots modulo p and q using Euler's criterion:\n   Because p = 3 mod 4, (p + 1) is divisible by 4:\n   a1 = + (C^((p + 1) / 4)) mod p\n   a2 = - a1 = (p - a1) mod p\n\n   Because q = 3 mod 4, (q + 1) is divisible by 4:\n   b1 = + (C^((q + 1) / 4)) mod q\n   b2 = - b1 = (q - b1) mod q\n\n   Step 3b: Combine roots using the Chinese Remainder Theorem (CRT):\n   Use the Extended Euclidean Algorithm to find coefficients c and d such that:\n   c * p + d * q = 1  =>  c * p = 1 (mod q) and d * q = 1 (mod p).\n   Define CRT basis weights:\n   Mp = (d * q) mod n\n   Mq = (c * p) mod n\n\n   The four simultaneous roots modulo n are:\n   \u2022 Root 1: P1 = + (a1 * Mp + b1 * Mq) mod n\n   \u2022 Root 2: P2 = + (a1 * Mp - b1 * Mq) mod n\n   \u2022 Root 3: P3 = - P2 = (n - P2) mod n\n   \u2022 Root 4: P4 = - P1 = (n - P1) mod n\n\n--------------------------------------------------\nIII. DISADVANTAGE & PRACTICAL RESOLUTION (4-TO-1 AMBIGUITY)\n\u2022 The primary drawback of Rabin is 4-to-1 Ambiguity: The decryption algorithm produces four valid mathematical square roots, only ONE of which is the real plaintext message P.\n\u2022 Resolution: Sender appends a known redundant bit pattern (e.g., repeating the last 16 bits of the message: P = M || M_tail) before encryption. During decryption, the receiver inspects all four candidate roots and selects the unique one containing the valid redundant pattern.",
    "mathSolutions": [
      {
        "variantLabel": "Classroom Notes Worked Example (Tejonidhi M R, Slide 71): p=7, q=11, P=20",
        "given": "Primes p = 7, q = 11 (both == 3 mod 4). Plaintext P = 20.",
        "required": "1. Public modulus n; 2. Ciphertext C; 3. Four decrypted roots via CRT",
        "formula": "n=pq, C=P^2 mod n, a1=C^((p+1)/4) mod p, b1=C^((q+1)/4) mod q, CRT combination",
        "steps": [
          "Step 1: n = p * q = 7 * 11 = 77.",
          "Step 2: C = P^2 mod n = 20^2 mod 77 = 400 mod 77. Since 400 = 5 * 77 + 15, C = 15.",
          "Step 3: Square roots mod p=7: (p+1)/4 = (7+1)/4 = 2. a1 = 15^2 mod 7 = 1^2 mod 7 = 1. a2 = -1 = 6 mod 7.",
          "Step 4: Square roots mod q=11: (q+1)/4 = (11+1)/4 = 3. b1 = 15^3 mod 11 = 4^3 mod 11 = 64 mod 11 = 9. b2 = -9 = 2 mod 11.",
          "Step 5: Extended Euclidean algorithm for 7 and 11: 11 = 1(7) + 4; 7 = 1(4) + 3; 4 = 1(3) + 1. Reversing: 1 = 4 - 3 = 4 - (7 - 4) = 2(4) - 7 = 2(11 - 7) - 7 = 2(11) - 3(7). So 2(11) - 3(7) = 1. Here Mp = 2*11 = 22, Mq = -3*7 = -21 = 56 mod 77.",
          "Step 6: Compute 4 roots:",
          "P1 = (a1*Mp + b1*Mq) mod 77 = (1*22 + 9*56) mod 77 = (22 + 504) mod 77 = 526 mod 77 = 64.",
          "P2 = (a1*Mp - b1*Mq) mod 77 = (1*22 - 9*56) mod 77 = (22 - 504) mod 77 = -482 mod 77 = 57.",
          "P3 = -P2 mod 77 = 77 - 57 = 20.",
          "P4 = -P1 mod 77 = 77 - 64 = 13."
        ],
        "finalAnswer": "Ciphertext C = 15; Four Candidate Roots: {13, 20, 57, 64}. Original Plaintext P = 20 is recovered!",
        "verification": "13^2 mod 77 = 169 mod 77 = 15; 20^2 mod 77 = 400 mod 77 = 15; 57^2 mod 77 = 3249 mod 77 = 15; 64^2 mod 77 = 4096 mod 77 = 15. All 4 roots verified.",
        "calculatorType": "rabin",
        "calculatorPreset": {
          "p": 7,
          "q": 11,
          "pVal": 20
        }
      }
    ],
    "quickRevision": {
      "keyPoints": [
        "Security is provably equivalent to integer factorization of n = pq.",
        "Primes MUST satisfy p == 3 mod 4 and q == 3 mod 4 (Blum integers).",
        "Public Key is n; Private Key is (p, q).",
        "Encryption: C = P^2 mod n.",
        "Decryption yields 4 roots via CRT (4-to-1 ambiguity).",
        "Redundant padding is appended to resolve ambiguity."
      ],
      "keywords": [
        "Michael O. Rabin",
        "Provably secure",
        "Integer factorization equivalence",
        "p, q == 3 mod 4",
        "Blum integers",
        "C = P^2 mod n",
        "4-to-1 ambiguity",
        "CRT decryption"
      ],
      "formulas": [
        "p = 3 (mod 4), q = 3 (mod 4)",
        "C = P^2 mod n",
        "a1 = C^((p+1)/4) mod p",
        "b1 = C^((q+1)/4) mod q"
      ],
      "diagramElements": [
        "Encryption squaring block",
        "Decryption split into mod p and mod q roots",
        "CRT combination block producing 4 candidate plaintexts",
        "Redundancy filter picking original P"
      ],
      "examinerTraps": [
        "Always state the 4-to-1 ambiguity disadvantage and how redundancy bits resolve it."
      ]
    },
    "qText": "Illustrate and explain the complete Rabin cryptosystem (Key Generation, Encryption, and Decryption using the Chinese Remainder Theorem) with a neat diagram.",
    "examReadyAnswer": "I. INTRODUCTION & THEORETICAL BASIS\nThe Rabin cryptosystem, introduced by Michael O. Rabin in 1979, was the first asymmetric public-key cryptosystem with provable security: recovering the plaintext from ciphertext is computationally equivalent to factoring the public modulus n = pq.\nEven if an adversary has unlimited chosen-ciphertext attacks, breaking Rabin is mathematically as hard as factoring integers.\n\n--------------------------------------------------\nII. THE THREE RABIN ALGORITHMS\n1. KEY GENERATION ALGORITHM:\n   \u2022 Step 1: Select two distinct, large prime numbers p and q satisfying the Blum integer condition:\n     p = 3 (mod 4)  and  q = 3 (mod 4)\n     (This condition guarantees that square roots modulo p and q can be calculated via simple exponentiation).\n   \u2022 Step 2: Compute the public modulus:\n     n = p * q\n   \u2022 Step 3:\n     - Public Key: n (Announced to everyone)\n     - Private Key: (p, q) (Kept secret by receiver)\n\n2. ENCRYPTION ALGORITHM (Sender):\n   \u2022 Input: Plaintext message P, represented as an integer such that 0 <= P < n.\n   \u2022 Operation: Compute Ciphertext C by squaring modulo n:\n     C = P^2 mod n\n\n3. DECRYPTION ALGORITHM (Receiver via CRT):\n   The receiver must solve the quadratic congruence x^2 = C (mod n). Since n = pq, this splits into two independent congruences:\n   x^2 = C (mod p)   and   x^2 = C (mod q).\n\n   Step 3a: Compute square roots modulo p and q using Euler's criterion:\n   Because p = 3 mod 4, (p + 1) is divisible by 4:\n   a1 = + (C^((p + 1) / 4)) mod p\n   a2 = - a1 = (p - a1) mod p\n\n   Because q = 3 mod 4, (q + 1) is divisible by 4:\n   b1 = + (C^((q + 1) / 4)) mod q\n   b2 = - b1 = (q - b1) mod q\n\n   Step 3b: Combine roots using the Chinese Remainder Theorem (CRT):\n   Use the Extended Euclidean Algorithm to find coefficients c and d such that:\n   c * p + d * q = 1  =>  c * p = 1 (mod q) and d * q = 1 (mod p).\n   Define CRT basis weights:\n   Mp = (d * q) mod n\n   Mq = (c * p) mod n\n\n   The four simultaneous roots modulo n are:\n   \u2022 Root 1: P1 = + (a1 * Mp + b1 * Mq) mod n\n   \u2022 Root 2: P2 = + (a1 * Mp - b1 * Mq) mod n\n   \u2022 Root 3: P3 = - P2 = (n - P2) mod n\n   \u2022 Root 4: P4 = - P1 = (n - P1) mod n\n\n--------------------------------------------------\nIII. DISADVANTAGE & PRACTICAL RESOLUTION (4-TO-1 AMBIGUITY)\n\u2022 The primary drawback of Rabin is 4-to-1 Ambiguity: The decryption algorithm produces four valid mathematical square roots, only ONE of which is the real plaintext message P.\n\u2022 Resolution: Sender appends a known redundant bit pattern (e.g., repeating the last 16 bits of the message: P = M || M_tail) before encryption. During decryption, the receiver inspects all four candidate roots and selects the unique one containing the valid redundant pattern."
  },
  {
    "groupId": "GRP-M4-IT-01",
    "masterQuestionTitle": "State and define the Information Technology Act 2000, and list its key aims and objectives.",
    "module": 4,
    "topic": "IT Act - Objectives",
    "subtopic": "Aim, Scope & Objectives of IT Act 2000",
    "priority": "P0",
    "uniquePaperCount": 3,
    "totalApplicablePapers": 9,
    "frequencyPct": 33.3,
    "historicalFrequency": "3/9 unique papers (33.3%)",
    "historicalPapers": [
      "P3: Jan 2021 (8M)",
      "P4: Feb/Mar 2022 (10M)",
      "P5: Sept/Oct 2022 (10M)"
    ],
    "historicalMarks": "8M, 10M",
    "variants": [
      {
        "qId": "Q036",
        "paperCode": "P3-Q036",
        "wording": "Define information IT act? List out the objectives of IT act.",
        "session": "January 2021",
        "year": 2021,
        "marks": 8,
        "paperId": "P3",
        "pdfPage": 3,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_03.png",
        "type": "Definition & Objectives"
      },
      {
        "qId": "Q038",
        "paperCode": "P4-Q038",
        "wording": "List out the objectives of the IT-Act.",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Objectives Enumeration"
      },
      {
        "qId": "Q041",
        "paperCode": "P5-Q041",
        "wording": "State the act of IT act. Mention the objectives of IT act.",
        "session": "September/October 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P5",
        "pdfPage": 5,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_05.png",
        "type": "Statutory Statement & Objectives"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/it_slide_01_Attachment1.pdf",
      "source": "IT_Act.ppt, Slide 1 (Tejonidhi M R, MCE Hassan)",
      "caption": "Information Technology Act 2000 preamble and legislative overview."
    },
    "svgType": "itact-flow",
    "notesSource": "IT_Act.ppt, Slides 2\u20137 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 2\u20137 - IT Act 2000 Definition & Objectives:\n- Act No. 21 of 2000, passed by Indian Parliament on 9 June 2000, notified on 17 October 2000.\n- Based on UNCITRAL Model Law on Electronic Commerce (1996).\n- Extends to whole of India and applies to offences committed outside India involving Indian computers.\n- Primary Objectives:\n  1. Grant legal recognition to electronic transactions and electronic commerce.\n  2. Grant legal recognition to Digital Signatures for authentication of information.\n  3. Facilitate electronic filing of documents with Government agencies (e-Governance).\n  4. Amend IPC (1860), Indian Evidence Act (1872), Bankers' Books Evidence Act (1891), RBI Act (1934).\n  5. Prevent computer crimes, unauthorized access, and hacking.",
    "masterAnswer": "I. STATUTORY DEFINITION & LEGISLATIVE BACKGROUND\nThe Information Technology Act, 2000 (Act No. 21 of 2000) is the primary law in India dealing with cybercrime and electronic commerce.\n\u2022 Enacted: 9 June 2000; Notified / Came into force: 17 October 2000.\n\u2022 International Foundation: Formulated based on the Model Law on Electronic Commerce adopted by the United Nations Commission on International Trade Law (UNCITRAL) in 1996.\n\u2022 Territorial Scope: Extends to the whole of India. Furthermore, under Section 75, it applies extraterritorially to any offence or contravention committed outside India by any person, irrespective of nationality, if the act involves a computer, computer system, or computer network located in India.\n\n--------------------------------------------------\nII. CORE AIMS AND OBJECTIVES OF THE IT ACT 2000\n1. Legal Recognition for Electronic Transactions (E-Commerce):\n   To provide legal sanction and recognition to transactions carried out by means of electronic data interchange (EDI) and other means of electronic communication, replacing paper-based methods.\n2. Legal Recognition for Digital Signatures:\n   To give legal validity and acceptance to digital signatures based on asymmetric cryptosystems for the authentication of electronic records.\n3. Facilitation of Electronic Governance (E-Governance):\n   To enable paperless governance by allowing electronic filing of applications, forms, creation and issuance of statutory licenses, permits, and government orders electronically.\n4. Amendment of Existing Colonial Indian Laws:\n   To amend four fundamental statutes to accommodate digital evidence:\n   a. Indian Penal Code, 1860 (to include cybercrimes and electronic forgery).\n   b. Indian Evidence Act, 1872 (to make electronic records admissible as primary/secondary evidence).\n   c. Bankers' Books Evidence Act, 1891 (to recognize printouts of electronic ledgers/statements).\n   d. Reserve Bank of India Act, 1934 (to facilitate electronic fund transfers between banks).\n5. Establishment of Regulatory Framework for Certifying Authorities:\n   To create the office of the Controller of Certifying Authorities (CCA) to license, regulate, and monitor the issuance of Digital Signature Certificates (DSC).\n6. Prevention, Investigation, and Adjudication of Cybercrimes:\n   To define computer-related offences (hacking, data theft, denial-of-service, publishing obscenity) and establish an adjudication mechanism (Adjudicating Officers and Cyber Appellate Tribunal).",
    "quickRevision": {
      "keyPoints": [
        "Act No. 21 of 2000, passed 9 June 2000, notified 17 October 2000.",
        "Based on UNCITRAL Model Law on E-Commerce (1996).",
        "Extraterritorial jurisdiction under Section 75 (if Indian computer involved).",
        "Key objectives: Legalize e-commerce, digital signatures, e-governance, amend IPC/Evidence/Bankers/RBI Acts, fight cybercrime."
      ],
      "keywords": [
        "Act No. 21 of 2000",
        "UNCITRAL Model Law (1996)",
        "Legal recognition",
        "E-Governance",
        "Digital Signatures",
        "IPC 1860 amendment",
        "Indian Evidence Act 1872",
        "Section 75 extraterritorial"
      ],
      "formulas": [
        "Enacted: 9 June 2000",
        "Notified: 17 October 2000",
        "4 Amended Acts: IPC 1860, Evidence 1872, Bankers Books 1891, RBI 1934"
      ],
      "diagramElements": [
        "Wheel diagram: IT Act 2000 in center with 6 spokes (E-commerce, Digital Signature, E-Gov, Law Amendments, CA Regulation, Penalties)"
      ],
      "examinerTraps": [
        "Do not forget to name the 4 amended Indian acts (IPC, Evidence Act, Bankers' Books, RBI Act); examiners look specifically for them."
      ]
    },
    "qText": "State and define the Information Technology Act 2000, and list its key aims and objectives.",
    "examReadyAnswer": "I. STATUTORY DEFINITION & LEGISLATIVE BACKGROUND\nThe Information Technology Act, 2000 (Act No. 21 of 2000) is the primary law in India dealing with cybercrime and electronic commerce.\n\u2022 Enacted: 9 June 2000; Notified / Came into force: 17 October 2000.\n\u2022 International Foundation: Formulated based on the Model Law on Electronic Commerce adopted by the United Nations Commission on International Trade Law (UNCITRAL) in 1996.\n\u2022 Territorial Scope: Extends to the whole of India. Furthermore, under Section 75, it applies extraterritorially to any offence or contravention committed outside India by any person, irrespective of nationality, if the act involves a computer, computer system, or computer network located in India.\n\n--------------------------------------------------\nII. CORE AIMS AND OBJECTIVES OF THE IT ACT 2000\n1. Legal Recognition for Electronic Transactions (E-Commerce):\n   To provide legal sanction and recognition to transactions carried out by means of electronic data interchange (EDI) and other means of electronic communication, replacing paper-based methods.\n2. Legal Recognition for Digital Signatures:\n   To give legal validity and acceptance to digital signatures based on asymmetric cryptosystems for the authentication of electronic records.\n3. Facilitation of Electronic Governance (E-Governance):\n   To enable paperless governance by allowing electronic filing of applications, forms, creation and issuance of statutory licenses, permits, and government orders electronically.\n4. Amendment of Existing Colonial Indian Laws:\n   To amend four fundamental statutes to accommodate digital evidence:\n   a. Indian Penal Code, 1860 (to include cybercrimes and electronic forgery).\n   b. Indian Evidence Act, 1872 (to make electronic records admissible as primary/secondary evidence).\n   c. Bankers' Books Evidence Act, 1891 (to recognize printouts of electronic ledgers/statements).\n   d. Reserve Bank of India Act, 1934 (to facilitate electronic fund transfers between banks).\n5. Establishment of Regulatory Framework for Certifying Authorities:\n   To create the office of the Controller of Certifying Authorities (CCA) to license, regulate, and monitor the issuance of Digital Signature Certificates (DSC).\n6. Prevention, Investigation, and Adjudication of Cybercrimes:\n   To define computer-related offences (hacking, data theft, denial-of-service, publishing obscenity) and establish an adjudication mechanism (Adjudicating Officers and Cyber Appellate Tribunal)."
  },
  {
    "groupId": "GRP-M4-IT-02",
    "masterQuestionTitle": "Explain the important provisions of the Information Technology Act 2000.",
    "module": 4,
    "topic": "IT Act - Important Provisions",
    "subtopic": "Statutory Framework & Key Provisions",
    "priority": "P0",
    "uniquePaperCount": 3,
    "totalApplicablePapers": 9,
    "frequencyPct": 33.3,
    "historicalFrequency": "3/9 unique papers (33.3%)",
    "historicalPapers": [
      "P8: Dec 2019 (10M)",
      "P3: Jan 2021 (12M)",
      "P4: Feb/Mar 2022 (6M)"
    ],
    "historicalMarks": "6M, 10M, 12M",
    "variants": [
      {
        "qId": "Q035",
        "paperCode": "P8-Q035",
        "wording": "Explain the important provisions of IT act.",
        "session": "December 2019",
        "year": 2019,
        "marks": 10,
        "paperId": "P8",
        "pdfPage": 8,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_08.png",
        "type": "Provisions Overview"
      },
      {
        "qId": "Q037",
        "paperCode": "P3-Q037",
        "wording": "Explain any 4 provisions of IT act.",
        "session": "January 2021",
        "year": 2021,
        "marks": 12,
        "paperId": "P3",
        "pdfPage": 3,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_03.png",
        "type": "Specific 4 Provisions"
      },
      {
        "qId": "Q039",
        "paperCode": "P4-Q039",
        "wording": "Explain important provisions of IT-Act.",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 6,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Provisions Overview"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/it_slide_25_Attachment2.png",
      "source": "IT_Act.ppt, Slide 25 (Tejonidhi M R, MCE Hassan)",
      "caption": "Chapter-wise statutory breakdown of IT Act 2000 provisions."
    },
    "svgType": "itact-flow",
    "notesSource": "IT_Act.ppt, Slides 8\u201318 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 8\u201318 - Major Provisions of IT Act 2000:\n1. Legal Recognition of Electronic Records (Section 4): Where any law requires information to be written, electronic record satisfies such requirement.\n2. Legal Recognition of Digital Signatures (Section 5): Digital signature accepted on par with physical signature.\n3. Electronic Governance (Sections 6\u201310): Filing forms with govt, issuing licenses electronically, electronic retention of documents.\n4. Attribution, Acknowledgement and Dispatch (Sections 11\u201313): Rules for legal attribution, time of receipt, place of business.\n5. Secure Electronic Records and Secure Digital Signatures (Sections 14\u201316).\n6. Regulation of Certifying Authorities (Sections 17\u201334): Appointment of CCA, licensing of CAs.\n7. Penalties and Adjudication (Sections 43\u201347): Compensation up to Rs 1 crore for unauthorized access/virus.\n8. Offences and Cyber Crimes (Sections 65\u201378): Tampering with source documents (Sec 65), Hacking (Sec 66), Obscenity (Sec 67).",
    "masterAnswer": "I. STATUTORY ARCHITECTURE\nThe Information Technology Act, 2000 comprises 13 Chapters, 94 Sections, and 4 Schedules.\nTo address questions asking for \"Important provisions\" (6M/10M) or specifically \"Explain any 4 provisions\" (12M), the provisions are structured into four comprehensive primary pillars followed by supplementary regulatory provisions.\n\n--------------------------------------------------\nII. FOUR PRIMARY CORE PROVISIONS\nPROVISION 1: DIGITAL SIGNATURE & ELECTRONIC AUTHENTICATION (SECTIONS 3 & 5)\n\u2022 Section 3 (Authentication of electronic records): Any subscriber may authenticate an electronic record by affixing their digital signature using an asymmetric cryptosystem and hash function.\n\u2022 Section 5 (Legal recognition of digital signatures): Where any law requires a document to be signed, a digital signature satisfies such law on par with a handwritten ink signature.\n\nPROVISION 2: ELECTRONIC GOVERNANCE (SECTIONS 4, 6, 7 & 8)\n\u2022 Section 4 (Legal recognition of electronic records): Information rendered or made available in electronic form and accessible for subsequent reference satisfies statutory requirements of writing.\n\u2022 Section 6 (Delivery of electronic services): Permits filing of forms, issuance of licenses, sanctions, approvals, and receipt of payments in electronic form by Government ministries.\n\u2022 Section 7 (Retention of electronic records): Electronic retention of documents is valid if accessible for future reference and original format/headers are retained.\n\nPROVISION 3: ATTRIBUTION, ACKNOWLEDGEMENT & DISPATCH (SECTIONS 11, 12 & 13)\n\u2022 Section 11 (Attribution): Electronic record is legally attributed to the originator if sent by originator, authorized agent, or automated system programmed by them.\n\u2022 Section 12 (Acknowledgement): Prescribes procedures for verifying receipt of electronic communication.\n\u2022 Section 13 (Time and place of dispatch and receipt): Dispatch occurs when record enters a system outside originator's control; receipt occurs upon entry into designated resource. Places of dispatch/receipt are deemed to be principal places of business.\n\nPROVISION 4: SECURE ELECTRONIC RECORDS & SECURE DIGITAL SIGNATURES (SECTIONS 14, 15 & 16)\n\u2022 Section 14 (Secure electronic record): Record verified to have remained unaltered since a specific point in time using an agreed security procedure.\n\u2022 Section 15 (Secure digital signature): A digital signature applied using a private key exclusively under the subscriber's control and verifiable via public key.\n\n--------------------------------------------------\nIII. SUPPLEMENTARY STATUTORY PROVISIONS\nPROVISION 5: PENALTIES & ADJUDICATION (SECTION 43)\n\u2022 Civil liability: Anyone who accesses computer systems without permission, downloads/copies data, introduces computer viruses, causes damage, or disrupts access is liable to pay damages by way of compensation up to \u20b91 crore to the affected person.\n\nPROVISION 6: CRIMINAL OFFENCES (SECTIONS 65, 66, 67)\n\u2022 Section 65: Tampering with computer source documents (Imprisonment up to 3 years or fine up to \u20b92 lakh).\n\u2022 Section 66: Hacking and computer related offences (Imprisonment up to 3 years or fine up to \u20b95 lakh).\n\u2022 Section 67: Publishing or transmitting obscene material in electronic form (Imprisonment up to 5 years and fine up to \u20b910 lakh).",
    "quickRevision": {
      "keyPoints": [
        "Digital Signatures (Sec 3, 5): Equal to handwritten signatures.",
        "E-Governance (Sec 4, 6, 7): Paperless filing with government.",
        "Attribution & Dispatch (Sec 11-13): Rules for sender, receipt time, business location.",
        "Secure Records (Sec 14-16): Verification of integrity.",
        "Penalties (Sec 43): Civil compensation up to 1 crore for unauthorized access/damage.",
        "Offences (Sec 65-67): Criminal penalties for source tampering, hacking, obscenity."
      ],
      "keywords": [
        "Section 4 (Electronic records)",
        "Section 5 (Digital Signatures)",
        "Sections 6-10 (E-Governance)",
        "Sections 11-13 (Attribution)",
        "Section 43 (Compensation up to 1 Crore)",
        "Section 65 (Source code tampering)",
        "Section 66 (Hacking)"
      ],
      "formulas": [
        "Sec 4: Electronic writing",
        "Sec 5: Digital signature validity",
        "Sec 43: \u20b91 crore civil damages",
        "Sec 65/66: 3 years imprisonment"
      ],
      "diagramElements": [
        "4 Pillars diagram of IT Act provisions",
        "Civil penalties (Sec 43) vs Criminal offences (Sec 65-67) comparison"
      ],
      "examinerTraps": [
        "Remember to state Section numbers (Section 4, 5, 11-13, 43, 65, 66); quoting exact sections earns top marks."
      ]
    },
    "qText": "Explain the important provisions of the Information Technology Act 2000.",
    "examReadyAnswer": "I. STATUTORY ARCHITECTURE\nThe Information Technology Act, 2000 comprises 13 Chapters, 94 Sections, and 4 Schedules.\nTo address questions asking for \"Important provisions\" (6M/10M) or specifically \"Explain any 4 provisions\" (12M), the provisions are structured into four comprehensive primary pillars followed by supplementary regulatory provisions.\n\n--------------------------------------------------\nII. FOUR PRIMARY CORE PROVISIONS\nPROVISION 1: DIGITAL SIGNATURE & ELECTRONIC AUTHENTICATION (SECTIONS 3 & 5)\n\u2022 Section 3 (Authentication of electronic records): Any subscriber may authenticate an electronic record by affixing their digital signature using an asymmetric cryptosystem and hash function.\n\u2022 Section 5 (Legal recognition of digital signatures): Where any law requires a document to be signed, a digital signature satisfies such law on par with a handwritten ink signature.\n\nPROVISION 2: ELECTRONIC GOVERNANCE (SECTIONS 4, 6, 7 & 8)\n\u2022 Section 4 (Legal recognition of electronic records): Information rendered or made available in electronic form and accessible for subsequent reference satisfies statutory requirements of writing.\n\u2022 Section 6 (Delivery of electronic services): Permits filing of forms, issuance of licenses, sanctions, approvals, and receipt of payments in electronic form by Government ministries.\n\u2022 Section 7 (Retention of electronic records): Electronic retention of documents is valid if accessible for future reference and original format/headers are retained.\n\nPROVISION 3: ATTRIBUTION, ACKNOWLEDGEMENT & DISPATCH (SECTIONS 11, 12 & 13)\n\u2022 Section 11 (Attribution): Electronic record is legally attributed to the originator if sent by originator, authorized agent, or automated system programmed by them.\n\u2022 Section 12 (Acknowledgement): Prescribes procedures for verifying receipt of electronic communication.\n\u2022 Section 13 (Time and place of dispatch and receipt): Dispatch occurs when record enters a system outside originator's control; receipt occurs upon entry into designated resource. Places of dispatch/receipt are deemed to be principal places of business.\n\nPROVISION 4: SECURE ELECTRONIC RECORDS & SECURE DIGITAL SIGNATURES (SECTIONS 14, 15 & 16)\n\u2022 Section 14 (Secure electronic record): Record verified to have remained unaltered since a specific point in time using an agreed security procedure.\n\u2022 Section 15 (Secure digital signature): A digital signature applied using a private key exclusively under the subscriber's control and verifiable via public key.\n\n--------------------------------------------------\nIII. SUPPLEMENTARY STATUTORY PROVISIONS\nPROVISION 5: PENALTIES & ADJUDICATION (SECTION 43)\n\u2022 Civil liability: Anyone who accesses computer systems without permission, downloads/copies data, introduces computer viruses, causes damage, or disrupts access is liable to pay damages by way of compensation up to \u20b91 crore to the affected person.\n\nPROVISION 6: CRIMINAL OFFENCES (SECTIONS 65, 66, 67)\n\u2022 Section 65: Tampering with computer source documents (Imprisonment up to 3 years or fine up to \u20b92 lakh).\n\u2022 Section 66: Hacking and computer related offences (Imprisonment up to 3 years or fine up to \u20b95 lakh).\n\u2022 Section 67: Publishing or transmitting obscene material in electronic form (Imprisonment up to 5 years and fine up to \u20b910 lakh)."
  },
  {
    "groupId": "GRP-M4-IT-03",
    "masterQuestionTitle": "Explain the legal provisions regarding Attribution of electronic records (Section 11) and Acknowledgement of receipt (Section 12) under the IT Act 2000.",
    "module": 4,
    "topic": "IT Act - Attribution & Acknowledgement",
    "subtopic": "Sections 11, 12 and 13 Provisions",
    "priority": "P0",
    "uniquePaperCount": 1,
    "totalApplicablePapers": 9,
    "frequencyPct": 11.1,
    "historicalFrequency": "1/9 unique papers (11.1%)",
    "historicalPapers": [
      "P4: Feb/Mar 2022 (10M)"
    ],
    "historicalMarks": "10M",
    "variants": [
      {
        "qId": "Q040",
        "paperCode": "P4-Q040",
        "wording": "Explain the following: i) Attribution of electronic records (Section 11) ii) Acknowledgement of receipt (Section 12).",
        "session": "February/March 2022",
        "year": 2022,
        "marks": 10,
        "paperId": "P4",
        "pdfPage": 4,
        "paperPdf": "NSCL_PYQS.pdf",
        "pdfScanAsset": "images/pyq-scans/pyq_page_04.png",
        "type": "Statutory Explanation"
      }
    ],
    "originalDiagram": {
      "assetPath": "images/notes-extracted/it_slide_25_Attachment2.png",
      "source": "IT_Act.ppt, Slide 25 (Tejonidhi M R, MCE Hassan)",
      "caption": "Statutory rules for Attribution (Sec 11) and Acknowledgement (Sec 12)."
    },
    "svgType": "itact-flow",
    "notesSource": "IT_Act.ppt, Slides 24\u201330 (Prof. Tejonidhi M R, MCE Hassan)",
    "notesAnswer": "FROM MCE CLASSROOM SLIDES (Prof. Tejonidhi M R):\nSlide 24\u201330 - Sections 11, 12 & 13 of IT Act 2000:\nSection 11 - Attribution of Electronic Records:\nAn electronic record is attributed to the originator if it was sent by:\n1. Originator himself.\n2. By a person authorized to act on behalf of originator.\n3. By an automated information system programmed by or on behalf of originator.\n\nSection 12 - Acknowledgement of Receipt:\n1. Where originator has not agreed with addressee on a particular form of acknowledgement:\n   - Any communication by addressee (automated or otherwise), or\n   - Any conduct of addressee sufficient to indicate receipt.\n2. Where originator stipulates receipt is binding only on acknowledgement:\n   - Treated as never sent until acknowledgement is received.\n3. If no time agreed upon: acknowledgement must be received within reasonable time.",
    "masterAnswer": "I. INTRODUCTION\nChapter IV of the Information Technology Act, 2000 contains vital legal provisions governing when an electronic communication is legally deemed to have originated, when it is deemed received, and where the legal jurisdiction lies.\n\n--------------------------------------------------\nII. SECTION 11: ATTRIBUTION OF ELECTRONIC RECORDS\nUnder Section 11 of the IT Act 2000, an electronic record shall be attributed to the originator if it was sent:\n1. By the originator themselves: The actual person who generated or stored the record prior to transmission.\n2. By a person who had the authority to act on behalf of the originator: An authorized agent, employee, or attorney-in-fact acting with express or implied authority.\n3. By an automated information system: A software bot, server process, or automated script programmed by, or on behalf of, the originator to operate automatically.\n\nLegal Implication: Once attribution is established under any of these three conditions, the originator cannot repudiate the electronic record and is legally bound by its contents.\n\n--------------------------------------------------\nIII. SECTION 12: ACKNOWLEDGEMENT OF RECEIPT\nSection 12 lays down detailed rules regarding how receipt of an electronic record is legally established between the originator and the addressee:\n1. Form of Acknowledgement:\n   \u2022 Where the originator has not agreed with the addressee that the acknowledgement be in a particular form or by a particular method, an acknowledgement may be given by:\n     a) Any communication by the addressee, automated or otherwise (e.g. read receipt, return email).\n     b) Any conduct of the addressee, sufficient to indicate to the originator that the electronic record has been received.\n\n2. Conditional / Stipulated Acknowledgement:\n   \u2022 Where the originator has stipulated that the electronic record shall be binding only on receipt of an acknowledgement of such electronic record:\n     - The electronic record is deemed to have NEVER BEEN SENT until the acknowledgement has been received.\n\n3. Acknowledgement within Specified / Reasonable Time:\n   \u2022 Where the originator has not specified that binding depends on acknowledgement, but has requested receipt:\n     - If acknowledgement has not arrived within the agreed time (or within a REASONABLE TIME if no time was fixed), the originator may give notice to the addressee stating that no acknowledgement has been received and specifying a reasonable time for response.\n     - If still not received within that further time, the originator may treat the electronic record as though it was never sent.\n\n--------------------------------------------------\nIV. SYLLABUS INTEGRATION: SECTION 13 (DISPATCH AND RECEIPT)\nFor completeness (Module 4 syllabus scope):\n\u2022 Time of Dispatch: Occurs when electronic record enters a computer resource outside the originator's control.\n\u2022 Time of Receipt: Occurs when record enters designated computer resource; if non-designated, when retrieved by addressee.\n\u2022 Place: Deemed to be the principal place of business of originator and addressee.",
    "quickRevision": {
      "keyPoints": [
        "Section 11 Attribution: Sent by originator, authorized person, or automated system.",
        "Section 12 Acknowledgement: Any automated communication or conduct.",
        "If stipulated binding on acknowledgement: record is treated as unsent until acknowledgement arrives.",
        "Section 13: Dispatch occurs when outside originator's control; place is principal place of business."
      ],
      "keywords": [
        "Section 11 (Attribution)",
        "Section 12 (Acknowledgement)",
        "Section 13 (Dispatch/Receipt)",
        "Originator",
        "Authorized agent",
        "Automated system",
        "Stipulated acknowledgement",
        "Reasonable time"
      ],
      "formulas": [
        "Attribution = Originator OR Agent OR Automated System",
        "Stipulated Ack missing -> Record deemed NEVER SENT",
        "Dispatch = Leaving originator's control"
      ],
      "diagramElements": [
        "Flowchart: Originator -> Dispatch (outside control) -> Addressee receipt -> Acknowledgement return loop"
      ],
      "examinerTraps": [
        "Under Section 11, list all three conditions (originator, authorized person, automated system)."
      ]
    },
    "qText": "Explain the legal provisions regarding Attribution of electronic records (Section 11) and Acknowledgement of receipt (Section 12) under the IT Act 2000.",
    "examReadyAnswer": "I. INTRODUCTION\nChapter IV of the Information Technology Act, 2000 contains vital legal provisions governing when an electronic communication is legally deemed to have originated, when it is deemed received, and where the legal jurisdiction lies.\n\n--------------------------------------------------\nII. SECTION 11: ATTRIBUTION OF ELECTRONIC RECORDS\nUnder Section 11 of the IT Act 2000, an electronic record shall be attributed to the originator if it was sent:\n1. By the originator themselves: The actual person who generated or stored the record prior to transmission.\n2. By a person who had the authority to act on behalf of the originator: An authorized agent, employee, or attorney-in-fact acting with express or implied authority.\n3. By an automated information system: A software bot, server process, or automated script programmed by, or on behalf of, the originator to operate automatically.\n\nLegal Implication: Once attribution is established under any of these three conditions, the originator cannot repudiate the electronic record and is legally bound by its contents.\n\n--------------------------------------------------\nIII. SECTION 12: ACKNOWLEDGEMENT OF RECEIPT\nSection 12 lays down detailed rules regarding how receipt of an electronic record is legally established between the originator and the addressee:\n1. Form of Acknowledgement:\n   \u2022 Where the originator has not agreed with the addressee that the acknowledgement be in a particular form or by a particular method, an acknowledgement may be given by:\n     a) Any communication by the addressee, automated or otherwise (e.g. read receipt, return email).\n     b) Any conduct of the addressee, sufficient to indicate to the originator that the electronic record has been received.\n\n2. Conditional / Stipulated Acknowledgement:\n   \u2022 Where the originator has stipulated that the electronic record shall be binding only on receipt of an acknowledgement of such electronic record:\n     - The electronic record is deemed to have NEVER BEEN SENT until the acknowledgement has been received.\n\n3. Acknowledgement within Specified / Reasonable Time:\n   \u2022 Where the originator has not specified that binding depends on acknowledgement, but has requested receipt:\n     - If acknowledgement has not arrived within the agreed time (or within a REASONABLE TIME if no time was fixed), the originator may give notice to the addressee stating that no acknowledgement has been received and specifying a reasonable time for response.\n     - If still not received within that further time, the originator may treat the electronic record as though it was never sent.\n\n--------------------------------------------------\nIV. SYLLABUS INTEGRATION: SECTION 13 (DISPATCH AND RECEIPT)\nFor completeness (Module 4 syllabus scope):\n\u2022 Time of Dispatch: Occurs when electronic record enters a computer resource outside the originator's control.\n\u2022 Time of Receipt: Occurs when record enters designated computer resource; if non-designated, when retrieved by addressee.\n\u2022 Place: Deemed to be the principal place of business of originator and addressee."
  }
];

// Alias QUESTION_BANK to CONSOLIDATED_QUESTION_GROUPS for complete backwards compatibility
const QUESTION_BANK = CONSOLIDATED_QUESTION_GROUPS;

if (typeof window !== 'undefined') {
  window.CONSOLIDATED_QUESTION_GROUPS = CONSOLIDATED_QUESTION_GROUPS;
  window.QUESTION_BANK = CONSOLIDATED_QUESTION_GROUPS;
}
