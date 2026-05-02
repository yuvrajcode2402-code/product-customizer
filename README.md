#  Product Customizer

A live T-shirt customization web app built with pure HTML, CSS, and JavaScript.

🔗 **Live Demo:**  https://yuvrajcode2402-code.github.io/product-customizer/

---

##  Features

- Type any text and see it appear on the T-shirt in real time
- Choose from multiple colors the shirt updates visually
- Clean, minimal UI with a centered preview layout

---

##  Built With

- HTML5
- CSS3 (position absolute, CSS filters)
- Vanilla JavaScript (event listeners, DOM manipulation)

---

##  What I Tried First

I started by building the basic HTML structure a heading, a preview box with the shirt image, a text input, and a color dropdown. I linked the CSS and JS files and opened it using Live Server in VS Code.

For the color change feature, I first tried using CSS `hue-rotate` filters directly on the image but the colors weren't accurate because the shirt was white and had no base hue to rotate. I then tried a colored overlay div using `mix-blend-mode: multiply` which worked but colored the entire preview box as a rectangle, not just the shirt.

---

##  What Broke

1. **Typos in id names** — I wrote `prview-text` instead of `preview-text` in HTML, which meant JavaScript couldn't find the element at all. No error was shown, it just silently did nothing.

2. **Duplicate event listeners** — I accidentally added three separate `colorPicker.addEventListener` blocks in my JS file. They were conflicting with each other and the last one was overriding everything.

3. **Missing closing quote** — I wrote `id="color-picker` without the closing `"` in HTML, which broke the JS connection to that element.

4. **CSS filter on white shirt** — CSS `hue-rotate` doesn't work on white images because white has no color information to rotate. I had to use `sepia()` first to add a base color, then `hue-rotate()` to shift it to the right hue.

5. **Text not appearing on shirt** — The preview text was showing below the shirt instead of on it. I had to use `position: absolute` on the text combined with `position: relative` on the parent div to overlay the text correctly.

---

##  How I Fixed It Using AI

- I used Claude to understand what `position: absolute` and `position: relative` actually do and why they need to work as a pair
- When the color wasn't working, Claude explained that CSS filters on white images need `sepia()` as a base before `hue-rotate()` can shift to accurate colors
- Claude helped me spot that I had three duplicate event listeners by asking me to share my script.js screenshot something I had missed completely
- I learned to use the browser console (F12) to check for errors and test `document.getElementById()` directly to verify if JS was finding my elements

---

##  3 Prompts I Used

1. *"The color is not changing when I select from dropdown, what could be wrong?"*
2. *"The text appears below the shirt not on it, how do I make it overlay on top of the image?"*
3. *"CSS filter hue-rotate is not giving correct colors on a white shirt, what's the right approach?"*

---

##  What I Did Not Understand Initially

- Why the JS `<script>` tag goes before `</body>` and not in `<head>` like CSS
- What `transform: translate(-50%, -50%)` actually does and why all three properties (top, left, transform) are needed together for true centering
- Why id names in HTML and JS must match character by character — even one typo silently breaks everything
- How CSS filters work on images and why white images behave differently from colored ones

---


