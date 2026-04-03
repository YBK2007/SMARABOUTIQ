body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f5f3ef;
    color: #1a1a1a;
  }
  
  /* HERO */
  .hero {
    position: relative;
    height: 100vh;
  }
  
  .hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
  
  /* TYPO */
  h1 {
    font-family: 'Playfair Display';
    font-size: 50px;
  }
  
  h2 {
    font-family: 'Playfair Display';
    font-size: 26px;
    font-style: italic;
  }
  
  p {
    color: #555;
  }
  
  /* SECTION */
  .section {
    padding: 80px 20px;
    text-align: center;
  }
  
  .dark {
    background: #eae3d2;
  }
  
  /* IMAGE SECTION */
  .image-section {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 60px 10%;
  }
  
  .image-section img {
    width: 50%;
    border-radius: 10px;
  }
  
  .image-section .text {
    width: 50%;
  }
  
  /* REVERSE */
  .reverse {
    flex-direction: row-reverse;
  }
  
  /* FULL IMAGE */
  .full-img {
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
  }
  
  /* CTA */
  .cta {
    padding: 80px;
    text-align: center;
    background: linear-gradient(135deg, #d4af37, #f5e6c8);
  }
  
  /* BUTTON */
  button {
    padding: 12px 25px;
    background: linear-gradient(45deg,#c9a96e,#e6c07b);
    border: none;
    cursor: pointer;
  }
  
  /* WA */
  .wa {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #25D366;
    padding: 15px;
    border-radius: 50%;
  }
  
  /* MOBILE */
  @media (max-width: 768px) {
  
    h1 {
      font-size: 28px;
    }
  
    h2 {
      font-size: 20px;
    }
  
    .hero {
      height: 80vh;
    }
  
    .image-section {
      flex-direction: column;
      gap: 20px;
      padding: 40px 20px;
      text-align: center;
    }
  
    .image-section img,
    .image-section .text {
      width: 100%;
    }
  
  }