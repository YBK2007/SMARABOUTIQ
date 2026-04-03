// Animasi masuk untuk judul utama
gsap.from("h1", { opacity: 0, y: -50, duration: 1.2, ease: "power2.out" });
gsap.from(".hero h2", { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: "power2.out" });
gsap.from(".hero button", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "back.out(1.7)" });

// Fungsi WhatsApp
function openWhatsApp() {
    const number = "6281957147033";
    const text = encodeURIComponent("Hello, saya tertarik dengan SMARA Boutique Residence");
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
}