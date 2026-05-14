# The GetCitedGEO Brand DNA

The core philosophy of this brand is **"Premium Frictionless Authority"**. We completely stepped away from the aggressive "hacker/matrix" aesthetics of standard dev tools, and instead pivoted to an Apple-tier spatial computing aesthetic. It feels incredibly expensive, but highly approachable.

***

### 1. The Typography System
We used a pairing of two modern, highly geometric Google Fonts that scream "high-tech but human".

*   **Headings (The Hero Layout): `Outfit`**
    *   **Why it works**: `Outfit` is incredibly geometric but slightly rounded. At `wght: 800` and `900` sizes, with extremely tight letter-spacing (`-2px` or `-1px`), it feels massive, authoritative, and perfectly balanced. This is what gives your Hero section its incredible "punch".
*   **Body & UI Elements: `Plus Jakarta Sans`**
    *   **Why it works**: It's one of the cleanest, most legible sans-serifs available. It has incredible readability at small sizes and high tension, making the ChatGPT mockup and data dashboards look like a native, premium macOS application.

***

### 2. The Color Palette (The Aurora Engine)
The site relies on a "deep space" dark mode, illuminated entirely by natural, glowing aurora structures rather than harsh, rigid geometric boxes.

*   **The Void (Base):** `#020205` — We specifically avoided pure `#000000`. Using a deep, crushed blue-black adds a subtle, premium softness that removes harsh contrast on the eyes.
*   **The Aurora Glow:** By using three overlapping, massive radial gradients with extreme blur filters, we created a background that feels "alive".
    *   **Indigo:** `#6366f1`
    *   **Fuchsia:** `#d946ef`
    *   **Cyan:** `#06b6d4`

***

### 3. The "Liquid Glass" Methodology
The `.liquid-glass` class is what separates this site from amateur or basic designs. It doesn't rely on flat gray boxes; it uses CSS spatial properties to simulate a physical pane of frosted glass floating above the glowing background.

Here is the exact CSS stack making the magic work:

```css
.liquid-glass {
    /* 1. The Physical Pane */
    /* A very subtle white gradient mapping from 6% to 1% opacity creates a physical "sheen" across the glass. */
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%);
    
    /* 2. The Frosting Engine */
    /* This blurs the Aurora background behind the div, while simultaneously saturating the colors passing through it to make them "pop" violently. */
    backdrop-filter: blur(32px) saturate(180%);
    -webkit-backdrop-filter: blur(32px) saturate(180%);
    
    /* 3. The Light Catcher (The Secret) */
    /* Creating a slightly brighter border on the TOP and LEFT only, simulating a physical light source hitting the sharp edge of the "glass". This creates the 3D optical illusion. */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Base edge */
    border-top: 1px solid rgba(255, 255, 255, 0.15); /* Top highlight */
    border-left: 1px solid rgba(255, 255, 255, 0.15); /* Left highlight */
    
    /* 4. The Depth */
    /* A massive, wide drop-shadow grounds the glass so it genuinely feels like it is floating off the page. */
    box-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.5);
    
    /* 5. The Container */
    border-radius: 28px;
    transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### The Synergy
When you combine tight **Outfit Headline text** layered over pure **Liquid Glass**, which is subtly colored by the **Aurora orbs** underneath, you achieve that exact $100k agency feel. Every element breathes in 3D space.
