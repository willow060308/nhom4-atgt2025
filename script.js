// Zoom image modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Tìm tất cả ảnh trong khu vực có class zoomable
document.querySelectorAll(".zoomable img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Đóng modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Click ra ngoài để đóng
modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// === Lưu và hiển thị đánh giá ===
const form = document.querySelector(".feedback-form");
const nameInput = document.getElementById("fullname");
const messageInput = document.getElementById("message");
const list = document.getElementById("feedbackItems");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong>: ${message}`;
    list.prepend(li);

    // Clear
    nameInput.value = "";
    messageInput.value = "";
});

// === PHÍM TẮT BẬT/TẮT XEM ĐÁNH GIÁ ===
// Nhấn: Ctrl + Alt + D để bật hoặc tắt
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "d") {
        document.getElementById("feedbackList").classList.toggle("hidden");
    }
});
