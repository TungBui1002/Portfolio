// Toggle Theme Light/Dark
const toggleBtn = document.getElementById("toggle-theme");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Load theme from storage
document.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("theme");
  if (stored) {
    root.setAttribute("data-theme", stored);
  }
});

// Modal Popup Projects
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModal(project) {
  modal.style.display = "flex";
  let content = "";

  if (project === "movie") {
    content = `
      <h2>Movie App Online</h2>
      <p>✔️ Phát video dùng ExoPlayer<br>✔️ Lấy dữ liệu từ API phim<br>✔️ MVVM Architecture + Retrofit</p>
      <a href="https://github.com/TungBui1002/BuildMovieAppOnline.git">🔗 Xem mã nguồn</a>
    `;
  } else if (project === "food") {
    content = `
      <h2>Order Food App</h2>
      <p>✔️ Giao diện đặt món theo menu<br>✔️ Tích hợp Firebase Realtime Database<br>✔️ Xử lý đơn hàng realtime</p>
      <a href="https://github.com/TungBui1002/oderfoodapp_flutter.git">🔗 Xem mã nguồn</a>
    `;
  }

  modalBody.innerHTML = content;
}

function closeModal() {
  modal.style.display = "none";
}

// EmailJS gửi mail từ contact form
function sendEmail(event) {
  event.preventDefault();

  emailjs.sendForm('your_service_id', 'your_template_id', '#contact-form', 'your_public_key')
    .then(() => {
      alert("Đã gửi thành công 🎉");
      document.getElementById("contact-form").reset();
    }, (err) => {
      alert("Có lỗi xảy ra 😿: " + err.text);
    });
}
