body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fffaf7;
  color: #333;
}

a {
  text-decoration: none;
}

header {
  background: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.hero {
  background: #f8efe8;
  padding: 40px 20px;
  text-align: center;
}

.hero img {
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
}

.hero h1 {
  font-size: 48px;
  color: #5c3b2e;
}

.hero p {
  font-size: 20px;
}

.btn {
  display: inline-block;
  background: #9b6b5b;
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  margin: 10px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 40px 20px;
}

.card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
  text-align: center;
}

.card h3 {
  margin: 10px 0;
}

.price {
  color: #9b6b5b;
  font-weight: bold;
  margin-bottom: 10px;
}

footer {
  background: black;
  color: white;
  text-align: center;
  padding: 50px 20px;
}
