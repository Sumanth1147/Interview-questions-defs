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
    true    ------------------------------------// pass true for event capturing
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


// Real-world uses of stopPropagation() and event capturing in web applications

// event.stopPropagation()

// event.stopPropagation() is used to prevent an event from continuing its journey up (bubbling phase) or down (capturing phase) the DOM tree after it has been handled by a specific element. This can be particularly useful in cases where you want to isolate the behavior of an element's event handler, preventing it from affecting other elements in the hierarchy.

// Real-world examples:

// Nested elements with conflicting event handlers: Imagine a web page with a button nested inside a <div> element, and both have click event listeners attached. Clicking the button triggers its own event handler and, due to event bubbling, also triggers the <div>'s event handler. In this situation, if you only want the button's event handler to be triggered, you can call event.stopPropagation() within the button's click handler, according to DhiWise. This stops the event from propagating further, preventing the <div>'s event handler from being triggered.

// Stopping event bubbling for specific elements in a menu: Consider a navigation menu where a <ul> element has a click event listener attached to handle clicks on the menu itself. Each <li> element inside the <ul> also contains an <a> element, and you want to handle clicks on these <a> elements differently than clicks on the menu itself. If a user clicks on an <a> element, you can use event.stopPropagation() to prevent the event from bubbling up to the <ul> element and triggering its handler, says Naukri.com. This way, you can implement separate logic for clicks on menu items versus the menu container.

// Dropdown menus or modal dialogs: When implementing dropdown menus or modal dialogs, you might want to close them when a user clicks outside the element. However, if a user clicks on an interactive element within the dropdown or modal, you don't want it to close. By using event.stopPropagation() on clicks within the dropdown/modal, you can prevent those clicks from bubbling up to the document or window object, which would trigger the close behavior. 

// Event capturing
// Event capturing is the initial phase of event propagation where an event travels down the DOM tree from the root to the target element. While less frequently used than event bubbling, it provides an opportunity to intercept and handle events before they reach the target element, says a Medium article. You enable capturing by setting the third parameter of addEventListener() to true. 

// Real-world examples:
// Capturing clicks outside a custom dropdown menu or modal to close it: If you have a custom dropdown or modal, you might want it to close when a user clicks anywhere outside of it. You can attach an event listener to the document object during the capturing phase (setting useCapture to true) and check if the clicked element is outside the dropdown or modal, says GreatFrontEnd. If it is, you close the dropdown or modal.

// Handling events in nested elements before they reach the target: Suppose you have a parent element with a capturing event listener that performs some pre-processing, like validating input, before an event reaches a child element that is responsible for handling the specific action. This allows for early intervention and potentially preventing unwanted actions or modifying the event object.

// Event delegation for non-bubbling events: Some events, like focus, do not bubble. Event capturing can be useful in such situations, allowing you to attach an event listener to a parent element and intercept events on its children, which might not be possible with bubbling, according to Stack Overflow. 