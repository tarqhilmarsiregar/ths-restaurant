class AddReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form action="" method="POST">
            <div class="name">
                <label for="reviewer"><h4 tabindex="0">Name</h4></label>
                <input type="text" placeholder="Enter your name" id="reviewer" required>
            </div>
            <div class="review">
                <label><h4 tabindex="0">Review</h4></label>
                <textarea required id="review-text"></textarea>
            </div>
            <button type="submit" id="submitReview">Submit</button>
        </form>
    `;
  }
}

customElements.define('add-review', AddReview);
export default AddReview;
