// Add item to cart with count
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart") || "{}");
    cart[item] = (cart[item] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item} added to cart!`);
}
function navigateTo(page) {
    window.location.href = `${page}.html`;
}
window.onload = () => {
    const mobileBtn = document.getElementById("mobile");
    const laptopBtn = document.getElementById("laptop");
    const tabletBtn = document.getElementById("tablets");
    const cartBtn = document.getElementById("cart");
    mobileBtn?.addEventListener("click", () => navigateTo("mobile"));
    laptopBtn?.addEventListener("click", () => navigateTo("laptop"));
    tabletBtn?.addEventListener("click", () => navigateTo("tablet"));
    cartBtn?.addEventListener("click", () => navigateTo("cart"));
    // Render cart page
    if (document.body.id === "cart-page") {
        const cartList = document.getElementById("cart-list");
        let cart = JSON.parse(localStorage.getItem("cart") || "{}");
        if (Object.keys(cart).length === 0) {
            cartList.innerHTML = "<p>Your cart is empty.</p>";
        }
        else {
            cartList.innerHTML = Object.entries(cart)
                .map(([item, count]) => `<li>${item} <span>x${count}</span></li>`)
                .join("");
        }
        const checkoutBtn = document.getElementById("checkout-btn");
        checkoutBtn?.addEventListener("click", () => {
            alert("Checkout process started (dummy).");
        });
        const clrbtn = document.getElementById("clear-btn");
        clrbtn?.addEventListener("click", () => {
            localStorage.removeItem("cart");
            const cartList = document.getElementById("cart-list");
            if (cartList) {
                cartList.innerHTML = "<p>Your cart is empty.</p>";
            }
            alert("Cleared your cart!");
        });
    }
};
