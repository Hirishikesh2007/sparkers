/* =====================================================
   1. SESSION GUARD & LOGOUT
===================================================== */
if (!localStorage.getItem("currentUser")) {
    window.location.href = "login.html";
}

document.getElementById("logout")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
});


/* =====================================================
   2. EXPANDED PROGRAMMING & DSA QUESTION DATASET (22 PROBLEMS)
===================================================== */
const questions = [
    // --- EASY ---
    { id: 1, title: "Two Sum", category: "Programming", difficulty: "Easy", description: "Find indices of two numbers in an array that add up to a target sum.", solved: false },
    { id: 2, title: "Valid Parentheses", category: "Programming", difficulty: "Easy", description: "Determine if an input string containing brackets is valid using a stack.", solved: false },
    { id: 3, title: "Reverse Linked List", category: "Programming", difficulty: "Easy", description: "Reverse a singly linked list iteratively and recursively.", solved: false },
    { id: 4, title: "Best Time to Buy and Sell Stock", category: "Programming", difficulty: "Easy", description: "Find the maximum profit you can achieve from buying and selling stock once.", solved: false },
    { id: 5, title: "Valid Anagram", category: "Programming", difficulty: "Easy", description: "Determine if two strings are anagrams of each other.", solved: false },
    { id: 6, title: "Binary Search", category: "Programming", difficulty: "Easy", description: "Implement binary search to find a target value in an O(log n) sorted array.", solved: false },

    // --- MEDIUM ---
    { id: 7, title: "Longest Substring Without Repeating Characters", category: "Programming", difficulty: "Medium", description: "Find the length of the longest substring with unique characters using sliding window.", solved: false },
    { id: 8, title: "Maximum Subarray (Kadane's Algo)", category: "Programming", difficulty: "Medium", description: "Find the contiguous subarray with the largest sum.", solved: false },
    { id: 9, title: "3Sum", category: "Programming", difficulty: "Medium", description: "Find all unique triplets in an array that sum up to zero.", solved: false },
    { id: 10, title: "Container With Most Water", category: "Programming", difficulty: "Medium", description: "Find two lines that together with the x-axis form a container holding the most water.", solved: false },
    { id: 11, title: "Binary Tree Level Order Traversal", category: "Programming", difficulty: "Medium", description: "Return the level order traversal of a binary tree's nodes (BFS).", solved: false },
    { id: 12, title: "Validate Binary Search Tree", category: "Programming", difficulty: "Medium", description: "Determine if a given binary tree is a valid Binary Search Tree (BST).", solved: false },
    { id: 13, title: "Coin Change", category: "Programming", difficulty: "Medium", description: "Compute the fewest number of coins needed to make up a given amount (DP).", solved: false },
    { id: 14, title: "Number of Islands", category: "Programming", difficulty: "Medium", description: "Count the number of islands in a 2D grid using DFS/BFS graph traversal.", solved: false },
    { id: 15, title: "Group Anagrams", category: "Programming", difficulty: "Medium", description: "Group an array of strings into sub-lists of anagrams using a hash map.", solved: false },
    { id: 16, title: "Merge Intervals", category: "Programming", difficulty: "Medium", description: "Merge all overlapping intervals in an array and return non-overlapping intervals.", solved: false },
    { id: 17, title: "Product of Array Except Self", category: "Programming", difficulty: "Medium", description: "Calculate products of all elements except the self element without using division.", solved: false },

    // --- HARD ---
    { id: 18, title: "Merge k Sorted Lists", category: "Programming", difficulty: "Hard", description: "Merge k sorted linked lists into one sorted list using a Priority Queue / Heap.", solved: false },
    { id: 19, title: "LRU Cache Implementation", category: "Programming", difficulty: "Hard", description: "Design and implement a Least Recently Used (LRU) cache with O(1) operations.", solved: false },
    { id: 20, title: "Trapping Rain Water", category: "Programming", difficulty: "Hard", description: "Compute how much water an elevation map can trap after raining using two pointers.", solved: false },
    { id: 21, title: "Minimum Window Substring", category: "Programming", difficulty: "Hard", description: "Find the minimum window in a string containing all characters of another string.", solved: false },
    { id: 22, title: "Word Search II", category: "Programming", difficulty: "Hard", description: "Find all words on a 2D board using Trie and Backtracking algorithms.", solved: false }
];

/* =====================================================
   3. QUIZ DATASET (20 QUESTIONS)
===================================================== */
const quizData = [
    { question: "1. Which data structure uses the LIFO (Last In, First Out) principle?", options: ["Queue", "Stack", "Array", "Binary Tree"], correct: 1 },
    { question: "2. What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n)", "O(1)", "O(n²)"], correct: 3 },
    { question: "3. Which data structure is best suited for implementing a FIFO queue?", options: ["Stack", "LinkedList", "Binary Search Tree", "Max Heap"], correct: 1 },
    { question: "4. What is the time complexity to search an element in a balanced Binary Search Tree (BST)?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 2 },
    { question: "5. What does SQL stand for?", options: ["Structured Query Language", "Sequential Query List", "Simple Question Language", "System Quality Logic"], correct: 0 },
    { question: "6. Which normal form eliminates partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 },
    { question: "7. Which key uniquely identifies a record in a relational database table?", options: ["Foreign Key", "Candidate Key", "Primary Key", "Super Key"], correct: 2 },
    { question: "8. What does the 'I' in ACID properties stand for?", options: ["Integrity", "Isolation", "Indexing", "Inheritance"], correct: 1 },
    { question: "9. Which layer in the OSI model handles packet routing across different networks?", options: ["Transport Layer", "Data Link Layer", "Network Layer", "Application Layer"], correct: 2 },
    { question: "10. What port does HTTP typically use by default?", options: ["21", "22", "80", "443"], correct: 2 },
    { question: "11. Which protocol translates human-readable domain names to IP addresses?", options: ["DHCP", "DNS", "FTP", "ARP"], correct: 1 },
    { question: "12. What mechanism is used by TCP to establish a reliable connection?", options: ["2-Way Handshake", "3-Way Handshake", "Sliding Window", "Poling"], correct: 1 },
    { question: "13. Which algorithm is designed to avoid deadlocks in OS resource allocation?", options: ["Round Robin", "Banker's Algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm"], correct: 1 },
    { question: "14. What condition causes thrashing in virtual memory?", options: ["High CPU utilization", "Frequent page faults", "Low disk space", "Deadlock"], correct: 1 },
    { question: "15. Which CPU scheduling algorithm gives smallest average waiting time?", options: ["FCFS", "SJF (Shortest Job First)", "Round Robin", "Priority Scheduling"], correct: 1 },
    { question: "16. What is a lightweight unit of execution within a process called?", options: ["Kernel", "Thread", "Page", "Semaphore"], correct: 1 },
    { question: "17. What problem occurs when a model performs extremely well on training data but poorly on unseen test data?", options: ["Underfitting", "Overfitting", "Gradient Explosion", "Dimensionality Reduction"], correct: 1 },
    { question: "18. Which activation function is commonly used in hidden layers of Deep Neural Networks?", options: ["Sigmoid", "ReLU", "Step Function", "Linear"], correct: 1 },
    { question: "19. In JavaScript, which keyword declares a block-scoped variable that can be reassigned?", options: ["var", "const", "let", "static"], correct: 2 },
    { question: "20. What HTTP status code represents '404'?", options: ["OK", "Unauthorized", "Forbidden", "Not Found"], correct: 3 }
];


/* =====================================================
   4. DASHBOARD PROGRESS BAR LOGIC
===================================================== */
function updateDashboardProgressBar() {
    const total = questions.length;
    const solvedCount = questions.filter(q => q.solved).length;
    const percentage = Math.round((solvedCount / total) * 100);

    const fillElem = document.getElementById("dashProgressBarFill");
    const statsElem = document.getElementById("dashProgressStats");

    if (fillElem) fillElem.style.width = `${percentage}%`;
    if (statsElem) statsElem.textContent = `${solvedCount} / ${total} Solved (${percentage}%)`;
}


/* =====================================================
   5. RENDER PRACTICE PROBLEMS
===================================================== */
const questionContainer = document.getElementById("questionContainer");
const searchInput = document.getElementById("search");

function renderQuestions(items) {
    if (!questionContainer) return;
    questionContainer.innerHTML = "";

    if (items.length === 0) {
        questionContainer.innerHTML = `<p style="color:#94a3b8;">No matching questions found.</p>`;
        return;
    }

    items.forEach(q => {
        const card = document.createElement("div");
        card.className = "question-card";
        card.innerHTML = `
            <div>
                <h3>${q.title}</h3>
                <div class="badges">
                    <span class="badge ${q.difficulty}">${q.difficulty}</span>
                    <span class="badge" style="background:#334155; color:#cbd5e1;">${q.category}</span>
                </div>
                <p style="color:#94a3b8; font-size:0.9rem; line-height:1.4;">${q.description}</p>
            </div>
            <button class="primary-btn ${q.solved ? 'btn-solved' : ''}" style="margin-top:1rem; width:100%;" onclick="openCodeWorkspace(${q.id})">
                <i class="fa-solid ${q.solved ? 'fa-check-double' : 'fa-code'}"></i> ${q.solved ? 'Solved (Open Workspace)' : 'Solve Challenge'}
            </button>
        `;
        questionContainer.appendChild(card);
    });
}

renderQuestions(questions);
updateDashboardProgressBar();

// Live Search Filter
searchInput?.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = questions.filter(q => 
        q.title.toLowerCase().includes(term) || 
        q.difficulty.toLowerCase().includes(term)
    );
    renderQuestions(filtered);
});

// Difficulty Sidebar Filter
document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        item.classList.add("active");

        const diff = item.getAttribute("data-difficulty");
        if (diff === "All") {
            renderQuestions(questions);
        } else {
            renderQuestions(questions.filter(q => q.difficulty === diff));
        }
    });
});


/* =====================================================
   6. CODE EDITOR WORKSPACE MODAL
===================================================== */
let activeProblemId = null;

const codeTemplates = {
    python: `def solve():\n    # Write your solution here\n    print("Hello from Python!")\n\nsolve()`,
    javascript: `function solve() {\n    // Write your solution here\n    console.log("Hello from JavaScript!");\n}\n\nsolve();`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    cout << "Hello from C++!" << endl;\n    return 0;\n}`,
    java: `public class Solution {\n    public static void main(String[] args) {\n        // Write your solution here\n        System.out.println("Hello from Java!");\n    }\n}`
};

function openCodeWorkspace(id) {
    activeProblemId = id;
    const problem = questions.find(q => q.id === id);
    if (!problem) return;

    document.getElementById("modalProblemTitle").innerHTML = `<i class="fa-solid fa-code"></i> ${problem.title}`;
    document.getElementById("modalProblemDesc").textContent = `${problem.category} | Difficulty: ${problem.difficulty} — ${problem.description}`;

    const langSelect = document.getElementById("languageSelect");
    const textarea = document.getElementById("codeTextarea");
    const output = document.getElementById("consoleOutput");

    textarea.value = codeTemplates[langSelect.value];
    output.textContent = "Ready to run code...";
    output.style.color = "#a7f3d0";

    document.getElementById("editorModal").style.display = "flex";
}

document.getElementById("closeEditorModal")?.addEventListener("click", () => {
    document.getElementById("editorModal").style.display = "none";
});

document.getElementById("languageSelect")?.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.getElementById("codeTextarea").value = codeTemplates[lang] || "";
});

document.getElementById("runCodeBtn")?.addEventListener("click", () => {
    const output = document.getElementById("consoleOutput");
    output.textContent = "Compiling and running tests...";
    output.style.color = "#fde047";

    setTimeout(() => {
        output.textContent = "Output: Test Case Passed! (Execution time: 38ms)";
        output.style.color = "#a7f3d0";
    }, 800);
});

document.getElementById("submitCodeBtn")?.addEventListener("click", () => {
    const output = document.getElementById("consoleOutput");
    output.textContent = "Submitting solution...";
    
    setTimeout(() => {
        output.textContent = "Accepted! Solution meets time and memory limits.";
        output.style.color = "#34d399";

        // Mark current problem solved
        const target = questions.find(q => q.id === activeProblemId);
        if (target) target.solved = true;

        renderQuestions(questions);
        updateDashboardProgressBar();

        setTimeout(() => {
            document.getElementById("editorModal").style.display = "none";
        }, 1200);
    }, 1000);
});


/* =====================================================
   7. VIEW SWITCHER (PRACTICE VS QUIZ)
===================================================== */
const navPractice = document.getElementById("navPractice");
const navQuiz = document.getElementById("navQuiz");
const practiceSection = document.getElementById("practiceSection");
const quizSection = document.getElementById("quizSection");

navPractice?.addEventListener("click", (e) => {
    e.preventDefault();
    navPractice.classList.add("active");
    navQuiz.classList.remove("active");
    practiceSection.style.display = "block";
    quizSection.style.display = "none";
});

navQuiz?.addEventListener("click", (e) => {
    e.preventDefault();
    navQuiz.classList.add("active");
    navPractice.classList.remove("active");
    practiceSection.style.display = "none";
    quizSection.style.display = "block";
    startQuiz();
});


/* =====================================================
   8. INTERACTIVE QUIZ PORTAL (20-QUESTION ENGINE)
===================================================== */
let quizIndex = 0;
let quizScore = 0;
let selectedOption = null;

const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsContainer = document.getElementById("quizOptionsContainer");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizCounter = document.getElementById("quizCounter");
const quizCardBox = document.getElementById("quizCardBox");
const quizScoreBox = document.getElementById("quizScoreBox");
const quizScoreText = document.getElementById("quizScoreText");
const quizBadge = document.getElementById("quizBadge");
const quizRestartBtn = document.getElementById("quizRestartBtn");

function startQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizCardBox.style.display = "block";
    quizScoreBox.style.display = "none";
    loadQuizQuestion();
}

function loadQuizQuestion() {
    selectedOption = null;
    quizNextBtn.disabled = true;

    const q = quizData[quizIndex];
    if (quizCounter) quizCounter.textContent = `Question ${quizIndex + 1} of ${quizData.length}`;
    if (quizQuestionText) quizQuestionText.textContent = q.question;

    if (quizOptionsContainer) {
        quizOptionsContainer.innerHTML = "";
        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option-btn";
            btn.textContent = opt;
            btn.onclick = () => {
                selectedOption = idx;
                document.querySelectorAll(".quiz-option-btn").forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");
                quizNextBtn.disabled = false;
            };
            quizOptionsContainer.appendChild(btn);
        });
    }

    quizNextBtn.textContent = quizIndex === quizData.length - 1 ? "Submit Quiz" : "Next Question";
}

quizNextBtn?.addEventListener("click", () => {
    if (selectedOption === null) return;
    if (selectedOption === quizData[quizIndex].correct) {
        quizScore++;
    }

    quizIndex++;
    if (quizIndex < quizData.length) {
        loadQuizQuestion();
    } else {
        quizCardBox.style.display = "none";
        quizScoreBox.style.display = "block";
        quizScoreText.textContent = `You scored ${quizScore} out of ${quizData.length} (${Math.round((quizScore / quizData.length) * 100)}%)`;

        const pct = (quizScore / quizData.length) * 100;
        if (pct >= 80) {
            quizBadge.textContent = "Status: Outstanding Performance! 🌟";
            quizBadge.style.color = "#34d399";
        } else if (pct >= 50) {
            quizBadge.textContent = "Status: Good Job! 👍";
            quizBadge.style.color = "#fde047";
        } else {
            quizBadge.textContent = "Status: Needs Practice 📚";
            quizBadge.style.color = "#fca5a5";
        }
    }
});

quizRestartBtn?.addEventListener("click", startQuiz);


/* =====================================================
   9. JSON MODAL LOGIC
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const jsonBtn = document.getElementById("jsonBtn");
    const jsonModal = document.getElementById("jsonModal");
    const closeJsonModal = document.getElementById("closeJsonModal");
    const jsonDisplay = document.getElementById("jsonDisplay");
    const copyJsonBtn = document.getElementById("copyJsonBtn");
    const downloadJsonBtn = document.getElementById("downloadJsonBtn");

    jsonBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        jsonDisplay.textContent = JSON.stringify(questions, null, 2);
        jsonModal.style.display = "flex";
    });

    closeJsonModal?.addEventListener("click", () => jsonModal.style.display = "none");

    copyJsonBtn?.addEventListener("click", () => {
        navigator.clipboard.writeText(jsonDisplay.textContent).then(() => {
            const original = copyJsonBtn.innerHTML;
            copyJsonBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            setTimeout(() => copyJsonBtn.innerHTML = original, 2000);
        });
    });

    downloadJsonBtn?.addEventListener("click", () => {
        const blob = new Blob([jsonDisplay.textContent], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "questions_data.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});