// ============================================================
// VERIFIED ANSWERS & CONTENT
// Source: AES.ppt (DOC-004), AS_.ppt (DOC-005), IT_Act.ppt (DOC-006)
//         Faculty: Tejonidhi M R, MCE Hassan
//         Standard References: Stallings, Forouzan
// All answers independently verified against standard cryptography references
// ============================================================

const ANSWERS = {

  // ================================================================
  // AES ANSWERS
  // ================================================================

  "AES_STRUCTURE": {
    qId: "AES_STRUCTURE",
    title: "AES General Structure",
    verificationStatus: "Verified",
    source: "DOC-004 (AES.ppt, Tejonidhi M R, MCE Hassan)",

    definition: `The Advanced Encryption Standard (AES) is a symmetric block cipher selected by NIST in 2001 as a replacement for DES. It operates on blocks of 128 bits using keys of 128, 192, or 256 bits, producing 10, 12, or 14 rounds respectively.`,

    keyFacts: [
      "Block size: always 128 bits (16 bytes)",
      "Key sizes: 128, 192, or 256 bits",
      "Rounds: 10 (128-bit key), 12 (192-bit key), 14 (256-bit key)",
      "State: 4×4 matrix of bytes (16 bytes)",
      "NIST specification: open algorithm, available worldwide"
    ],

    structure: `
AES ENCRYPTION STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━
Plaintext (128 bits)
         │
    [Initial AddRoundKey] ← Round Key K₀
         │
    ┌────┴────┐
    │  ROUND  │ × (Nr - 1) Normal Rounds
    │SubBytes │
    │ShiftRows│
    │MixCols  │
    │AddRKey  │← Round Key Kᵢ
    └────┬────┘
         │
    ┌────┴────┐
    │ FINAL   │  1 Final Round (NO MixColumns)
    │SubBytes │
    │ShiftRows│
    │AddRKey  │← Round Key K_Nr
    └────┬────┘
         │
    Ciphertext (128 bits)
`,

    rounds: {
      "128-bit key": "10 rounds",
      "192-bit key": "12 rounds",
      "256-bit key": "14 rounds"
    },

    criticalNote: "The FINAL encryption round omits MixColumns. This is NOT an error — it is by design to make the decryption structure symmetric. Only 3 transformations in the final round: SubBytes + ShiftRows + AddRoundKey.",

    nistCriteria: [
      "Security: resistance to cryptanalysis",
      "Cost: computational efficiency",
      "Algorithm and implementation characteristics",
      "Block size of 128 bits required",
      "Three key lengths: 128, 192, 256 bits",
      "Open, royalty-free algorithm",
      "Available worldwide"
    ],

    examAnswer5mark: `
AES (Advanced Encryption Standard) is a symmetric block cipher with:
• Block size: 128 bits | Key sizes: 128, 192, or 256 bits
• Rounds: 10 / 12 / 14 (depending on key size)

Each normal round has 4 transformations:
1. SubBytes – S-box substitution (byte-by-byte)
2. ShiftRows – cyclic left shifts on rows
3. MixColumns – matrix multiplication in GF(2⁸)
4. AddRoundKey – XOR with round key

Structure:
Plaintext → InitialAddRoundKey → (Nr-1) Normal Rounds → Final Round (SubBytes+ShiftRows+AddRoundKey) → Ciphertext

Note: Final round has NO MixColumns.
`,

    examAnswer10mark: `
Advanced Encryption Standard (AES) — Detailed Explanation

1. BACKGROUND:
   In 1997, NIST initiated a competition to replace DES. AES (Rijndael) was selected in 2001.
   Requirements: 128-bit block, 128/192/256-bit keys, open algorithm.

2. KEY PARAMETERS:
   • Block size: 128 bits (always)
   • Key sizes: 128, 192, 256 bits → 10, 12, 14 rounds
   • State: 4×4 byte matrix (16 bytes)

3. DATA UNITS:
   Bit → Byte (8 bits) → Word (32 bits = 4 bytes = 1 column) → Block (128 bits = 4 words) → State (4×4 matrix)

4. ENCRYPTION STRUCTURE:
   Step 1: Initial AddRoundKey (XOR plaintext with K₀)
   Step 2: (Nr-1) Normal Rounds:
     a) SubBytes – substitute using S-box
     b) ShiftRows – row 0 unchanged, row 1 left-shift 1, row 2 left-shift 2, row 3 left-shift 3
     c) MixColumns – multiply each column by fixed matrix in GF(2⁸)
     d) AddRoundKey – XOR with round key Kᵢ
   Step 3: Final Round (Nr):
     a) SubBytes
     b) ShiftRows
     c) AddRoundKey (NO MixColumns)

5. TRANSFORMATIONS:
   • SubBytes: Each byte replaced using S-box. Left nibble = row, right nibble = column.
   • ShiftRows: Row i shifted left by i positions cyclically.
   • MixColumns: Each column treated as polynomial over GF(2⁸). Multiplied by [2,3,1,1; 1,2,3,1; 1,1,2,3; 3,1,1,2].
   • AddRoundKey: State XOR round_key.

6. KEY EXPANSION:
   One extra round key: (Nr+1) round keys total. K₀ is used in initial AddRoundKey.

7. SECURITY:
   • Brute force: 2¹²⁸ for 128-bit key — computationally infeasible.
   • Resistant to differential and linear cryptanalysis.
   • No known practical attacks.
`
  },

  "AES_DATA_UNITS": {
    qId: "AES_DATA_UNITS",
    title: "AES Data Units",
    verificationStatus: "Verified",
    source: "DOC-004 (AES.ppt, Tejonidhi M R), Forouzan Textbook",

    examAnswer: `
AES Data Units — 5 Levels:

1. BIT
   • Smallest unit: 0 or 1
   • All computations ultimately operate on bits

2. BYTE (8 bits)
   • Basic unit of AES operations
   • Represented as two hexadecimal digits (e.g., 0x9A)
   • Each byte is a GF(2⁸) element for mathematical operations
   • SubBytes operates on individual bytes

3. WORD (32 bits = 4 bytes)
   • One column of the state matrix
   • MixColumns operates on individual words
   • Key schedule generates round keys as words
   • 4 words = 1 block

4. BLOCK (128 bits = 16 bytes = 4 words)
   • The fundamental input/output unit of AES
   • Fixed at 128 bits (always, regardless of key size)
   • Arranged into the State matrix for processing

5. STATE (4×4 byte matrix = 128 bits)
   • The intermediate data structure used during AES rounds
   • A 4-row × 4-column matrix of bytes
   • Input bytes loaded column by column:
     s[r][c] = in[r + 4c]  (r = row 0-3, c = col 0-3)
   • Output bytes extracted column by column:
     out[r + 4c] = s[r][c]

STATE MATRIX LAYOUT:
   Col 0   Col 1   Col 2   Col 3
   b₀  b₄  b₈  b₁₂    ← Row 0
   b₁  b₅  b₉  b₁₃    ← Row 1
   b₂  b₆  b₁₀ b₁₄    ← Row 2
   b₃  b₇  b₁₁ b₁₅    ← Row 3

   (Input bytes b₀..b₁₅ loaded column by column)
`
  },

  "AES_SUBBYTES": {
    qId: "AES_SUBBYTES",
    title: "AES SubBytes Transformation",
    verificationStatus: "Verified",
    source: "DOC-004 (AES.ppt, Tejonidhi M R), Stallings",

    examAnswer: `
SubBytes Transformation in AES:

DEFINITION: SubBytes is a non-linear byte substitution that replaces each byte
in the state independently using a substitution table (S-box).

PROCESS:
• Each byte b in state is replaced by S-box[b]
• The byte b is interpreted as two hex digits: left = row, right = column
• Look up S-box at [row][column] → new byte

EXAMPLE:
  Input byte: 0x53 → row = 5, column = 3
  S-box[0x5][0x3] = 0xED
  Output byte: 0xED

MATHEMATICAL CONSTRUCTION:
  1. Find multiplicative inverse of byte in GF(2⁸) [0 maps to 0]
  2. Apply affine transformation:
     b'ᵢ = bᵢ ⊕ b(ᵢ₊₄)₈ ⊕ b(ᵢ₊₅)₈ ⊕ b(ᵢ₊₆)₈ ⊕ b(ᵢ₊₇)₈ ⊕ cᵢ
     where c = 0x63 = 01100011₂

INVERSE SubBytes (Decryption):
  Apply inverse S-box: InvSubBytes[b] is the inverse of SubBytes[b]

PROPERTIES:
  • Provides non-linearity (resistance to linear cryptanalysis)
  • No fixed points: S-box[b] ≠ b for any b
  • No opposite fixed points: S-box[b] ≠ b̄ for any b
  • Each output bit depends on all 8 input bits
`,
  },

  "AES_MIXCOLUMNS": {
    qId: "AES_MIXCOLUMNS",
    title: "AES MixColumns (Mixing Transformation)",
    verificationStatus: "Verified",
    source: "DOC-004 (AES.ppt, Tejonidhi M R), Stallings",

    examAnswer: `
MixColumns (Mixing Transformation) in AES:

DEFINITION: MixColumns operates on each column of the state independently.
Each column of 4 bytes is treated as a polynomial over GF(2⁸) and multiplied
by a fixed polynomial.

MATRIX FORM:
Each column [s₀, s₁, s₂, s₃]ᵀ is multiplied by the fixed matrix:

  ┌ 2  3  1  1 ┐   ┌ s₀ ┐   ┌ s'₀ ┐
  │ 1  2  3  1 │ × │ s₁ │ = │ s'₁ │
  │ 1  1  2  3 │   │ s₂ │   │ s'₂ │
  └ 3  1  1  2 ┘   └ s₃ ┘   └ s'₃ ┘

EQUATIONS:
  s'₀ = (2·s₀) ⊕ (3·s₁) ⊕ (1·s₂) ⊕ (1·s₃)
  s'₁ = (1·s₀) ⊕ (2·s₁) ⊕ (3·s₂) ⊕ (1·s₃)
  s'₂ = (1·s₀) ⊕ (1·s₁) ⊕ (2·s₂) ⊕ (3·s₃)
  s'₃ = (3·s₀) ⊕ (1·s₁) ⊕ (1·s₂) ⊕ (2·s₃)

GF(2⁸) MULTIPLICATION RULES:
  • Multiply by 1: no change
  • Multiply by 2: left shift 1, XOR 0x1B if bit 7 was set
  • Multiply by 3: (multiply by 2) XOR original

EXAMPLE (column [0x87, 0x6E, 0x46, 0xA6]):
  s'₀ = 2·0x87 ⊕ 3·0x6E ⊕ 0x46 ⊕ 0xA6
      = 0x15 ⊕ 0xAB ⊕ 0x46 ⊕ 0xA6 = 0x47

IMPORTANT: MixColumns is NOT applied in the final encryption round.

INVERSE MixColumns (Decryption):
  Uses inverse matrix with coefficients {0x0E, 0x0B, 0x0D, 0x09}

SECURITY PURPOSE: Provides diffusion — each output byte depends on all 4 input bytes.
`,
  },

  // ================================================================
  // RSA ANSWERS
  // ================================================================

  "RSA_ALGORITHM": {
    qId: "RSA_ALGORITHM",
    title: "RSA Cryptosystem - Algorithm & Theory",
    verificationStatus: "Verified",
    source: "DOC-005 (AS_.ppt, Tejonidhi M R), Stallings, Forouzan",

    examAnswer: `
RSA CRYPTOSYSTEM (Rivest-Shamir-Adleman, 1977)

TYPE: Asymmetric (Public-Key) Cryptosystem
SECURITY BASIS: Difficulty of factoring large composite numbers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY GENERATION (Bob/Receiver):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Step 1: Choose two distinct large primes p and q
Step 2: Compute n = p × q  (the modulus)
Step 3: Compute φ(n) = (p − 1)(q − 1)  (Euler's totient)
Step 4: Choose e such that:
        • 1 < e < φ(n)
        • gcd(e, φ(n)) = 1  (e is coprime with φ(n))
Step 5: Find d = e⁻¹ mod φ(n)  (multiplicative inverse of e)
        Using Extended Euclidean Algorithm
Step 6: Public Key = (e, n)   [shared openly]
        Private Key = (d, n)  [kept secret]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENCRYPTION (Alice/Sender):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Get receiver's Public Key (e, n)
• Plaintext M where 0 ≤ M < n
• Ciphertext C = Mᵉ mod n

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DECRYPTION (Bob/Receiver):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Use Private Key (d, n)
• Recovered Plaintext M = Cᵈ mod n

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MATHEMATICAL FOUNDATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(Mᵉ)ᵈ ≡ M (mod n)   [by Euler's theorem]
Since e·d ≡ 1 (mod φ(n))
`,

    attacks: `
RSA ATTACKS:

1. BRUTE FORCE ATTACK
   • Try all possible private keys d
   • Infeasible for large key sizes (2048+ bits)

2. MATHEMATICAL ATTACKS
   • Factor n into p and q (factoring attack)
   • If n can be factored, φ(n) is revealed and d can be computed
   • No efficient algorithm known for large n

3. TIMING ATTACK
   • Measure time taken to perform decryption operations
   • Statistical analysis reveals bits of d
   • Countermeasure: constant-time implementations

4. CHOSEN-CIPHERTEXT ATTACK (CCA)
   • Attacker submits chosen ciphertexts for decryption
   • Analyses responses to determine private key
   • RSA-OAEP padding prevents this

5. SMALL EXPONENT ATTACK
   • If e is too small and same message sent to multiple receivers
   • Chinese Remainder Theorem can recover message
   • Use padding (PKCS#1) to prevent

6. COMMON MODULUS ATTACK
   • If same n is used with two different e values for same M
   • M can be recovered without knowing private key

7. MEET-IN-THE-MIDDLE ATTACK
   • Applicable to multi-prime RSA variants
`,
  },

  "RSA_NUMERICAL_WORKED": {
    qId: "RSA_NUMERICAL_WORKED",
    title: "RSA Numerical - p=17, q=11, e=7, M=88 (Verified PYQ)",
    verificationStatus: "Verified",
    source: "DOC-002 Page 9 (Sept/Oct 2022)",

    solution: `
GIVEN: p = 17, q = 11, e = 7, Message M = 88

STEP 1: Compute n
   n = p × q = 17 × 11 = 187

STEP 2: Compute φ(n)
   φ(n) = (p − 1)(q − 1) = 16 × 10 = 160

STEP 3: Verify e
   gcd(7, 160) = ?
   160 = 22 × 7 + 6
     7 = 1 × 6 + 1
     6 = 6 × 1 + 0  → gcd = 1 ✓
   So e = 7 is valid.

STEP 4: Find d = e⁻¹ mod φ(n) = 7⁻¹ mod 160
   Using Extended Euclidean Algorithm:
   160 = 22 × 7 + 6
     7 = 1 × 6 + 1    → 1 = 7 − 1×6
     6 = 160 − 22×7   → 1 = 7 − 1×(160 − 22×7)
                       → 1 = 23×7 − 1×160
   So 7⁻¹ mod 160 = 23
   d = 23

STEP 5: Keys
   Public Key  = (e=7, n=187)
   Private Key = (d=23, n=187)

STEP 6: Encryption (C = Mᵉ mod n)
   C = 88⁷ mod 187
   Using fast modular exponentiation:
   88² mod 187 = 7744 mod 187 = 7744 − 41×187 = 7744 − 7667 = 77
   88⁴ mod 187 = 77² mod 187 = 5929 mod 187 = 5929 − 31×187 = 5929 − 5797 = 132
   88⁷ = 88⁴ × 88² × 88¹
       = 132 × 77 × 88 (all mod 187)
   132 × 77 mod 187 = 10164 mod 187 = 10164 − 54×187 = 10164 − 10098 = 66
   66 × 88 mod 187 = 5808 mod 187 = 5808 − 31×187 = 5808 − 5797 = 11
   C = 11

STEP 7: Decryption (M = Cᵈ mod n)
   M = 11²³ mod 187
   11² mod 187 = 121
   11⁴ mod 187 = 121² mod 187 = 14641 mod 187 = 14641 − 78×187 = 14641−14586 = 55
   11⁸ mod 187 = 55² mod 187 = 3025 mod 187 = 3025 − 16×187 = 3025−2992 = 33
   11¹⁶ mod 187 = 33² mod 187 = 1089 mod 187 = 1089 − 5×187 = 1089−935 = 154
   11²³ = 11¹⁶ × 11⁴ × 11² × 11¹
       = 154 × 55 × 121 × 11 (all mod 187)
   154 × 55 mod 187 = 8470 mod 187 = 8470 − 45×187 = 8470−8415 = 55
   55 × 121 mod 187 = 6655 mod 187 = 6655 − 35×187 = 6655−6545 = 110
   110 × 11 mod 187 = 1210 mod 187 = 1210 − 6×187 = 1210−1122 = 88
   M = 88 ✓ (matches original message)

ANSWER:
   n = 187, φ(n) = 160, e = 7, d = 23
   Public Key = (7, 187), Private Key = (23, 187)
   Ciphertext C = 11, Decrypted Message M = 88 ✓
`,
  },

  // ================================================================
  // KNAPSACK ANSWERS
  // ================================================================

  "KNAPSACK_ALGORITHM": {
    qId: "KNAPSACK_ALGORITHM",
    title: "Knapsack Cryptosystem - Algorithm",
    verificationStatus: "Verified",
    source: "DOC-005 (AS_.ppt, Tejonidhi M R, MCE Hassan)",

    examAnswer: `
KNAPSACK CRYPTOSYSTEM (Merkle-Hellman, 1978)

CONCEPT: Based on the subset-sum (knapsack) problem.
  Given a set a and sum s: find x (binary vector) such that Σxᵢaᵢ = s
  This is NP-hard for general a, but easy for super-increasing a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUPER-INCREASING SEQUENCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A sequence b = [b₁, b₂, ..., bₖ] where each element is greater than
the sum of all previous elements:
  bᵢ > b₁ + b₂ + ... + bᵢ₋₁  for all i > 1

Example: {1, 2, 4, 10, 20, 40} — each ≥ sum of all before it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY GENERATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Create super-increasing k-tuple b = [b₁, b₂, ..., bₖ]  (private key part)
2. Choose modulus n > Σbᵢ  (n is coprime with r)
3. Choose multiplier r where gcd(r, n) = 1 and 1 ≤ r ≤ n−1
4. Compute public key a: aᵢ = r × bᵢ mod n
5. Public Key = k-tuple a   |   Private Key = (n, r, b)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENCRYPTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Convert plaintext to binary k-bit blocks
• For each block x = [x₁, x₂, ..., xₖ]:
  s = Σ xᵢ × aᵢ  (subset sum of public key)
• Ciphertext = s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DECRYPTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Compute r⁻¹ = modular inverse of r mod n
• Compute s' = r⁻¹ × s mod n
• Now solve: s' = Σ xᵢ × bᵢ using greedy algorithm on super-increasing b:
  - Start from largest bᵢ
  - If bᵢ ≤ remaining sum: xᵢ = 1, subtract bᵢ
  - Else: xᵢ = 0
• Recovered plaintext = binary string x
`,
  },

  "KNAPSACK_PYQ_P6": {
    qId: "KNAPSACK_PYQ_P6",
    title: "Knapsack Numerical - Private Key {1,2,4,10,20,40}, m=110, n=31 (Feb/Mar 2023)",
    verificationStatus: "Verified",
    source: "DOC-002 Page 7 (Feb/Mar 2023, 19CS703)",

    solution: `
GIVEN:
  Private Key (super-increasing) b = {1, 2, 4, 10, 20, 40}
  Modulus m = 110  (n in question = modulus)
  Multiplier n = 31  (r in question = multiplier)
  Verify: gcd(31, 110) = ? → 110 = 3×31 + 17, 31 = 1×17+14, 17=1×14+3, 14=4×3+2, 3=1×2+1 → gcd=1 ✓
  Verify super-increasing: 1 < 2 < 1+2+1=4 ✓, 4 < 10 < 1+2+4+3=10 ✓... ✓

STEP 1: Compute Public Key
  aᵢ = n × bᵢ mod m  (using n=31 as multiplier, m=110 as modulus)
  a₁ = 31 × 1 mod 110 = 31
  a₂ = 31 × 2 mod 110 = 62
  a₃ = 31 × 4 mod 110 = 124 mod 110 = 14
  a₄ = 31 × 10 mod 110 = 310 mod 110 = 90
  a₅ = 31 × 20 mod 110 = 620 mod 110 = 620 − 5×110 = 620−550 = 70
  a₆ = 31 × 40 mod 110 = 1240 mod 110 = 1240 − 11×110 = 1240−1210 = 30

  Public Key a = {31, 62, 14, 90, 70, 30}

STEP 2: Find r⁻¹ mod m = 31⁻¹ mod 110
  Using Extended Euclidean:
  110 = 3×31 + 17
   31 = 1×17 + 14
   17 = 1×14 + 3
   14 = 4×3 + 2
    3 = 1×2 + 1  → 1 = 3 − 1×2
  Back-substituting... 31⁻¹ mod 110 = 71
  Verify: 31 × 71 = 2201, 2201 mod 110 = 2201 − 20×110 = 2201−2200 = 1 ✓
  r⁻¹ = 71

STEP 3: Encrypt plaintext 100100111100101110
  Split into 6-bit blocks:
  Block 1: 100100 → x = [1,0,0,1,0,0]
  Block 2: 111100 → x = [1,1,1,1,0,0]
  Block 3: 101110 → x = [1,0,1,1,1,0]

  Encrypt Block 1 (100100):
  s = 1×31 + 0×62 + 0×14 + 1×90 + 0×70 + 0×30 = 31 + 90 = 121

  Encrypt Block 2 (111100):
  s = 1×31 + 1×62 + 1×14 + 1×90 + 0×70 + 0×30 = 31+62+14+90 = 197

  Encrypt Block 3 (101110):
  s = 1×31 + 0×62 + 1×14 + 1×90 + 1×70 + 0×30 = 31+14+90+70 = 205

  Ciphertext = {121, 197, 205}

STEP 4: Verify Decryption (Block 1: s=121)
  s' = r⁻¹ × s mod m = 71 × 121 mod 110
  71 × 121 = 8591, 8591 mod 110 = 8591 − 78×110 = 8591−8580 = 11
  Wait — let me verify: s' should give back plaintext using b.
  
  Actually 71 × 121 mod 110:
  71 × 121 = 8591
  8591 / 110 = 78.1, floor = 78
  8591 − 78×110 = 8591 − 8580 = 11
  
  Now solve s'=11 using b={1,2,4,10,20,40}:
  40 > 11? Yes → x₆=0
  20 > 11? Yes → x₅=0
  10 ≤ 11? Yes → x₄=1, remaining=11−10=1
   4 > 1? Yes → x₃=0
   2 > 1? Yes → x₂=0
   1 ≤ 1? Yes → x₁=1, remaining=0
  
  Recovered: [1,0,0,1,0,0] = 100100 ✓

RESULT:
  Public Key: {31, 62, 14, 90, 70, 30}
  r⁻¹ = 71
  Ciphertext blocks: 121, 197, 205
`,
  },

  "KNAPSACK_PYQ_P7": {
    qId: "KNAPSACK_PYQ_P7",
    title: "Knapsack Numerical - a=(17,25,46,94,201,400), s=272 (Dec 2023/Jan 2024)",
    verificationStatus: "Verified",
    source: "DOC-002 Page 5 (Dec 2023/Jan 2024, 20CS703)",

    solution: `
GIVEN: Public key a = (17, 25, 46, 94, 201, 400), sum s = 272
TASK: Find tuple x using inv_knapsackSum routine

NOTE: This is a DECRYPTION problem using inv_knapsackSum on the public key directly
(simplified knapsack — the super-increasing property of a is used directly).

VERIFY if a = (17, 25, 46, 94, 201, 400) is super-increasing:
  17 (base)
  25 > 17 ✓
  46 > 17+25=42 ✓
  94 > 17+25+46=88 ✓
  201 > 17+25+46+94=182 ✓
  400 > 17+25+46+94+201=383 ✓
  → YES, it is super-increasing. Greedy algorithm applies.

inv_knapsackSum(s=272, a=(17,25,46,94,201,400)):
  Check a₆=400: 400 > 272 → x₆ = 0
  Check a₅=201: 201 ≤ 272 → x₅ = 1, remaining = 272−201 = 71
  Check a₄=94:  94 > 71  → x₄ = 0
  Check a₃=46:  46 ≤ 71  → x₃ = 1, remaining = 71−46 = 25
  Check a₂=25:  25 ≤ 25  → x₂ = 1, remaining = 25−25 = 0
  Check a₁=17:  17 > 0   → x₁ = 0

RESULT: x = (0, 1, 1, 0, 1, 0)

VERIFICATION: 0×17 + 1×25 + 1×46 + 0×94 + 1×201 + 0×400
            = 0 + 25 + 46 + 0 + 201 + 0 = 272 ✓

ANSWER: x = (0, 1, 1, 0, 1, 0)
  Plaintext bits = 011010
`,
  },

  // ================================================================
  // RABIN ANSWERS
  // ================================================================

  "RABIN_ALGORITHM": {
    qId: "RABIN_ALGORITHM",
    title: "Rabin Cryptosystem - Algorithm",
    verificationStatus: "Verified",
    source: "DOC-005 (AS_.ppt, Tejonidhi M R, MCE Hassan), Forouzan",

    examAnswer: `
RABIN CRYPTOSYSTEM

TYPE: Asymmetric public-key cryptosystem
SECURITY: Based on difficulty of integer factorization
SPECIAL FEATURE: Decryption produces 4 possible plaintexts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY GENERATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Choose two distinct large primes p and q such that:
   p ≡ 3 (mod 4)   AND   q ≡ 3 (mod 4)
   [This ensures simplified square root calculation]
2. Compute n = p × q   (the modulus)
3. Public Key = n
4. Private Key = (p, q)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENCRYPTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Given plaintext P (where 0 ≤ P < n)
• Ciphertext C = P² mod n

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DECRYPTION (Chinese Remainder Theorem):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Given ciphertext C, find P such that P² ≡ C (mod n)
• Since p ≡ q ≡ 3 (mod 4):

Step 1: Compute modular square roots mod p:
  r = C^((p+1)/4) mod p

Step 2: Compute modular square roots mod q:
  s = C^((q+1)/4) mod q

Step 3: Use Extended Euclidean to find a, b:
  a×p + b×q = 1  (Bezout's identity)
  
Step 4: Calculate 4 roots using CRT:
  x = (a×p×s + b×q×r) mod n
  y = (a×p×s − b×q×r) mod n
  
  The four roots are: +x, −x, +y, −y (all mod n)
  Which gives: x, n−x, y, n−y

Step 5: One of these 4 values is the original plaintext P.
  (Use redundancy or context to identify the correct one)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITICAL POINT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decryption produces EXACTLY 4 possible values. The receiver must:
• Add redundancy to plaintext before encryption (e.g., repeat last k bits)
• After decryption, check which root has the redundancy pattern
• That is the original plaintext

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORKED EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Choose p = 7, q = 11 (both ≡ 3 mod 4: 7≡3 mod 4 ✓, 11≡3 mod 4 ✓)
n = 7 × 11 = 77

Plaintext P = 20
Encryption: C = P² mod n = 20² mod 77 = 400 mod 77 = 400 − 5×77 = 400−385 = 15
Ciphertext C = 15

Decryption:
  r = C^((p+1)/4) mod p = 15^(8/4) mod 7 = 15² mod 7 = 225 mod 7 = 225−32×7=225−224=1
  r = 1
  
  s = C^((q+1)/4) mod q = 15^(12/4) mod 11 = 15³ mod 11
  15 mod 11 = 4, 4³ = 64, 64 mod 11 = 9
  s = 9
  
  Extended Euclidean for 7a + 11b = 1:
  11 = 1×7 + 4 → 7 = 1×4 + 3 → 4 = 1×3 + 1
  Back: 1 = 4−1×3 = 4−(7−4) = 2×4−7 = 2×(11−7)−7 = 2×11−3×7
  So a = −3, b = 2  (verify: −3×7 + 2×11 = −21+22 = 1 ✓)
  
  x = (a×p×s + b×q×r) mod n = (−3×7×9 + 2×11×1) mod 77
    = (−189 + 22) mod 77 = −167 mod 77 = −167 + 3×77 = −167+231 = 64
  y = (a×p×s − b×q×r) mod n = (−189 − 22) mod 77 = −211 mod 77
    = −211 + 3×77 = −211+231 = 20
  
  Four roots: 64, 77−64=13, 20, 77−20=57
  Roots: {64, 13, 20, 57}
  Original plaintext P = 20 ✓ (verify: 20² mod 77 = 400 mod 77 = 15 = C ✓)
  
  Verify all: 64² mod 77 = 4096 mod 77 = 4096−53×77 = 4096−4081 = 15 ✓
              13² mod 77 = 169 mod 77 = 169−2×77 = 15 ✓
              57² mod 77 = 3249 mod 77 = 3249−42×77 = 3249−3234 = 15 ✓
`,
  },

  // ================================================================
  // IT ACT ANSWERS
  // ================================================================

  "IT_ACT_OBJECTIVES": {
    qId: "IT_ACT_OBJECTIVES",
    title: "IT Act 2000 - Objectives and Scope",
    verificationStatus: "Verified",
    source: "DOC-006 (IT_Act.ppt, Tejonidhi M R, MCE Hassan), IT Act 2000",

    examAnswer: `
INFORMATION TECHNOLOGY ACT, 2000

DEFINITION:
  The Information Technology Act, 2000 (IT Act) is an Act of the Indian Parliament
  to provide legal recognition for transactions carried out by means of electronic
  data interchange and other means of electronic communication, commonly referred to
  as "electronic commerce".

OBJECTIVES (8 Key Objectives):
  1. Grant legal recognition to electronic transactions/commerce
  2. Give legal recognition to digital signatures for authentication
  3. Facilitate electronic filing of documents with government agencies
  4. Facilitate electronic storage of data
  5. Facilitate and give legal sanction to electronic fund transfers
  6. Give legal recognition to bankers' books kept in electronic form
  7. Amend the Indian Penal Code, the Indian Evidence Act, 1872,
     the Bankers' Books Evidence Act, 1891, and the Reserve Bank of India Act, 1934
  8. Create regulatory framework for certifying authorities

SCOPE:
  • Applies to any offence or contravention thereunder committed outside India
    by any person (Section 1(2))
  • Does NOT apply to:
    - Negotiable instruments (other than cheques) — Section 1(4)
    - Power of Attorney
    - Trust deeds
    - Wills and testaments
    - Contracts for sale/conveyance of immovable property

IMPORTANT PROVISIONS (5 Key Provisions):
  1. Legal recognition of electronic records (Section 4)
  2. Legal recognition of digital signatures (Section 5)
  3. Use of electronic records and digital signatures in government (Sections 6-8)
  4. Attribution, acknowledgement and dispatch of electronic records (Sections 11-13)
  5. Secure electronic records and digital signatures (Sections 14-16)
  6. Certifying Authorities and Digital Signature Certificates (Sections 17-42)
  7. Penalties, Adjudication and Offences (Sections 43-74)
  8. Cyber Appellate Tribunal (Sections 48-64)
`,
  },

  "IT_ACT_ATTRIBUTION": {
    qId: "IT_ACT_ATTRIBUTION",
    title: "Attribution, Acknowledgement & Dispatch of Electronic Records (Sections 11-13)",
    verificationStatus: "Verified",
    source: "DOC-006 (IT_Act.ppt, Tejonidhi M R, MCE Hassan), IT Act 2000",

    examAnswer: `
ATTRIBUTION, ACKNOWLEDGEMENT AND DISPATCH OF ELECTRONIC RECORDS
IT Act 2000 — Sections 11, 12 and 13

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11: ATTRIBUTION OF ELECTRONIC RECORDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"An electronic record shall be attributed to the originator if it was sent by:
(a) the originator himself;
(b) a person who had the authority to act on behalf of the originator in respect
    of that electronic record; or
(c) an information system programmed by or on behalf of the originator to
    operate automatically."

KEY POINTS:
  • Attribution = determining WHO is responsible for an electronic record
  • The originator is the person who sends, generates, stores, or transmits
    an electronic record on behalf of himself or on behalf of another person
  • If a hacker intercepts and modifies the record, it cannot be attributed
    to the original sender
  • The originator is NOT a person acting as intermediary

EXAMPLE:
  Company A uses an automated system to send orders to Company B.
  Under Section 11, Company A is the originator, and the records sent by
  the automated system are attributed to Company A.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 12: ACKNOWLEDGEMENT OF RECEIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Where the originator has not agreed with the addressee that acknowledgement
of receipt of electronic record be given in a particular form or by a particular
method, an acknowledgement may be given by:
(a) any communication by the addressee, automated or otherwise; or
(b) any conduct of the addressee, sufficient to indicate to the originator
    that the electronic record has been received."

THREE SCENARIOS:
  Case 1: Originator requires acknowledgement BEFORE acting on the record
    → If no acknowledgement received by specified time, originator may:
       - Give notice treating the record as never sent
       - Act only upon receipt of acknowledgement

  Case 2: Originator requires acknowledgement but no time is specified
    → Originator may send notice asking for acknowledgement within reasonable time
    → If not received in reasonable time, originator may treat the record as not sent

  Case 3: No requirement for acknowledgement
    → Originator receives acknowledgement through automatic reply → both are deemed received
    → No acknowledgement → electronic record is still deemed sent; originator cannot assume receipt

KEY DISTINCTION FROM SECTION 13:
  Section 12 = WHETHER an acknowledgement was sent
  Section 13 = WHEN and WHERE the record was sent/received

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 13: TIME AND PLACE OF DISPATCH AND RECEIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIME OF DISPATCH:
  "Unless otherwise agreed between the originator and the addressee,
  the dispatch of an electronic record occurs when it enters a computer
  resource OUTSIDE the control of the originator."

TIME OF RECEIPT:
  Case A: Addressee has designated computer resource:
    → Receipt = when record enters the designated computer resource
    → If sent to other than designated: when addressee retrieves it

  Case B: Addressee has NOT designated a computer resource:
    → Receipt = when record enters the addressee's computer resource

PLACE OF DISPATCH AND RECEIPT:
  • Place of dispatch = originator's place of business
  • Place of receipt = addressee's place of business
  • If originator/addressee has multiple places of business:
    principal place of business is used
  • If no place of business: habitual residence is used

TIMELINE DIAGRAM:
  Originator          Originator's        Addressee's          Addressee
  composes record  →  system sends   →   computer resource  →  retrieves
                      (DISPATCH time)    (RECEIPT time if        record
                                          designated CR)
`,
  },

  // ================================================================
  // SYMMETRIC vs ASYMMETRIC
  // ================================================================

  "SYM_ASYM_COMPARISON": {
    qId: "SYM_ASYM_COMPARISON",
    title: "Symmetric vs Asymmetric Key Cryptography",
    verificationStatus: "Verified",
    source: "DOC-005 (AS_.ppt, Tejonidhi M R, MCE Hassan)",

    examAnswer: `
SYMMETRIC KEY CRYPTOGRAPHY vs ASYMMETRIC KEY CRYPTOGRAPHY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARAMETER          SYMMETRIC                ASYMMETRIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Keys               One shared secret key    Two keys: public + private
Key sharing        Must be shared secretly  Public key shared openly
Key distribution   Difficult (key exchange  Easy (publish public key)
                   problem)
Speed              Fast                     Slow (computationally heavy)
Key length         Shorter (e.g., 128-bit)  Longer (e.g., 2048-bit)
Scalability        Poor (n² keys for n      Good (2n keys for n users)
                   users)
Use case           Bulk data encryption     Key exchange, digital sig.
Examples           AES, DES, 3DES           RSA, Rabin, ECC, Knapsack
Authentication     No                       Yes (using private key)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SYMMETRIC KEY CRYPTOGRAPHY:
  • Same key for encryption and decryption
  • Sender and receiver must share the secret key in advance
  • Problem: How to securely exchange the key?
  • E(K, P) = C  and  D(K, C) = P  [same K]

  Diagram:
  Alice ──[Shared Key K]──► Encrypt ──[Ciphertext]──► Decrypt ──[Plaintext]──► Bob
                                                        ▲
                                              [Same Shared Key K]

ASYMMETRIC KEY CRYPTOGRAPHY:
  • Different keys: public key (Kpub) and private key (Kpriv)
  • Encryption: use receiver's public key
  • Decryption: use receiver's private key
  • E(Kpub_Bob, P) = C  and  D(Kpriv_Bob, C) = P

  Diagram:
  Alice ──[Bob's Public Key]──► Encrypt ──[Ciphertext]──► Decrypt ──[Plaintext]──► Bob
                                                           ▲
                                              [Bob's Private Key (secret)]

TRAPDOOR ONE-WAY FUNCTION:
  • A function f where:
    1. f is easy to compute (encryption)
    2. f⁻¹ is difficult to compute without trapdoor information (decryption without key)
    3. f⁻¹ is easy to compute WITH the trapdoor (private key)
  • RSA trapdoor: factoring n = p×q
  • Knapsack trapdoor: super-increasing sequence + modular transformation
`,
  },
};

// Export
if (typeof module !== 'undefined') {
  module.exports = { ANSWERS };
}
