// 1. Event Bubbling
// In the bubbling phase, the event starts from the target element (the element that triggered the event) and propagates up through its ancestors in the DOM tree. This is the default behavior in most modern browsers.

// 2. Event Capturing
// In the capturing phase, the event starts from the top of the DOM tree (the root element) and propagates down to the target element. This phase happens before the bubbling phase.

// Capturing Phase: Event travels from the root to the target.

// Bubbling Phase: Event travels from the target back to the root.


// EVENT BUBBLING
{/* <div>
  <button class="child">Hello</button>
</div>

<script>
  const parent = document.querySelector("div");
  const child = document.querySelector(".child");

  parent.addEventListener("click",
    function () {
      console.log("Parent");
    }
  );

  child.addEventListener("click", function () {
    console.log("Child");
  });
</script> */}
// Child
// Parent

// EVENT CAPTURING
{/* <div>
  <button class="child">Hello</button>
</div>

<script>
  const parent = document.querySelector("div");
  const child = document.querySelector(".child");

  parent.addEventListener("click",
    function () {
      console.log("Parent");
    },
    true    --------------------// pass true for event capturing
  );

  child.addEventListener("click", function () {
    console.log("Child");
  });
</script> */}
// Parent
// Child

// Summary of Applications
// Application	                                     Description
// Event Delegation	                 Handling events on dynamically generated elements efficiently.
// Event delegation leverages event bubbling.
// You attach an event listener to a parent element, and the event bubbles up from the target element (e.g., a child <li>) to the parent.
// The parent element handles the event for all its children.


// Modals and Overlays  	        Closing modals or overlays when clicking outside.
// Nested Component Interactions	Managing interactions between parent and child components.
// Preventing default behavior:       Blocking actions at a higher level.  // event capturing