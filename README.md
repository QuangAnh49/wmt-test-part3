# WMT Frontend Developer Test Report

---

## 📋 Overview

This is a submission for the **WMT Frontend Developer Test**, covering the following:

- ✅ Responsive HTML & CSS Product Carousel
- ✅ JavaScript Function for product value calculation and modal interactivity
- ✅ ReactJS refactoring with TailwindCSS and Framer Motion for animations
- ✅ CSS theory explanations (Specificity and Grid system)

**Technologies used:**  
HTML, CSS, JavaScript, React, TailwindCSS, Framer Motion, SwiperJS, Vite

---

## 🚀 Demo Link

- [Part 3 (React + TailwindCSS + Framer Motion) Deployment](https://wmt-test-part3.vercel.app/)

---

## 📦 Source Code

- [Source for Part 1 and Part 2 (HTML, CSS, JavaScript)](https://github.com/QuangAnh49/WMT-FE_TASK)

---

## 📑 Part 1: Responsive HTML & CSS

### ✅ Product Carousel

A product carousel was created with the following features:

- The carousel displays **three products**.
- Each product includes a title, a brief description, and an image.

### ✅ CSS Styling for Responsiveness

The carousel was styled using **plain CSS with Media Queries** to achieve:

- **Desktop View:** Displays three products per row.
- **Tablet View (768px and above):** Displays two products per row.
- **Mobile View (below 768px):** Displays one product per row.
- Smooth transitions between viewport sizes using CSS transitions.

---

## 📑 Part 2: JavaScript

### ✅ JavaScript Function for Total Value Calculation

A JavaScript function was implemented to calculate the total value of products in an array. It applies a 10% discount if a product’s quantity exceeds 5.

**Example:**

```javascript
function calculateTotalValue(products) {
  return products.reduce((total, product) => {
    let discount = product.quantity > 5 ? 0.1 : 0;
    let productValue = product.price * product.quantity * (1 - discount);
    return total + productValue;
  }, 0);
}
```

### Interactivity for Product Carousel

Users can click on a product image to view a larger, detailed version of the image in a modal window.
Smooth animations for opening and closing the modal were implemented using Framer Motion in React.

---

## 📑Part 3: ReactJS & TailwindCSS

### Props and State in ReactJS

Props: Props are used to pass data from a parent component to a child component. They are immutable and allow components to be reusable.
State: State is used to manage dynamic data within a component. It is mutable and allows components to respond to user interactions or other events.

Example:

Props were used in the CarouselModal component to pass modal data and a function to close the modal.
State was used in the Carousel component to manage the currently selected product and modal visibility.

### Refactored HTML Structure into ReactJS Component

The HTML structure was refactored into React components.

TailwindCSS was used for styling.

State variables controlled the modal display and carousel navigation (Next/Prev buttons).

Framer Motion handled modal animations.

---

## 📑Part 4: Problem Solving & Advanced Concepts

### CSS Specificity

CSS specificity determines which styles are applied to an element when multiple rules match the same element. Specificity is calculated based on the type of selectors used:

- Inline styles: style="color: red;" (specificity: 1000)
- ID selectors: #id (specificity: 100)
- Class, attribute, and pseudo-class selectors: .class, [attr=value], :hover (specificity: 10)
- Element and pseudo-element selectors: div, ::before (specificity: 1)

Example:

#submit { color: red; } /_ 100 _/
.button { color: blue; } /_ 10 _/
button { color: green; } /_ 1 _/
→ #submit will override .button and button.

### CSS Grid

CSS Grid is a layout system designed for creating two-dimensional layouts. It allows for precise control over rows and columns, making it more powerful than Flexbox for complex layouts.

Advantages over Flexbox:

- Flexbox is one-dimensional (row or column), while Grid is two-dimensional (rows and columns).
- Grid provides better control over alignment and spacing of items in both dimensions.

Example: Responsive Two-Column Layout
.container {
display: grid;
grid-template-columns: 200px 1fr;
gap: 20px;
}

---

## Contributors

Anh Bui Quang

```

```
