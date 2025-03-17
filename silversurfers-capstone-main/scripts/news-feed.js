import { post } from "./posts.js";

//generates the code to div post
let postHTML = '';

post.forEach((post) => {
  postHTML += `
      <div class="feed-post js-feed-post-${post.id}">
        <div class="post-header">
          <img class="profile-picture-icon" src="${post.pfp}">
          <div class="post-detail">
            <div class="header-self-name">
              ${post.whoPosted}
            </div>
            <div class="js-place-time">
              ${post.location}, ${post.age} years old
            </div>
          </div>
          <div class="bookmark-container">
            <img class="bookmark-icon" src="icons/circle-bookmark.svg">
          </div>
        </div>

        <div class="image-container">
          <img class="post-image" src="${post.image}">
        </div>

        <div class="reader-count-container">
          <img class="reader-count-icon" src="icons/sunglasses-alt.svg">
          <span class="reader-count">
              8,965 readers
          </span>
        </div>

        <div class="liked-by-container">
          <div class="liked-by-images">
            <img class="image-icon" src="/profile-pictures/random-woman-1.jpg">
            <img class="image-icon" src="/profile-pictures/random-woman-1.jpg">
            <img class="image-icon" src="/profile-pictures/random-woman-1.jpg">
          </div>
        
          <div class="liked-by-texts">
            Bookmarked by
              <span class="self-name">
                dionela
              </span>
            and
              <span class="like-count">
                ${post.likeCount} others
              </span>
          </div>
        </div>

        <div class="post-caption-container">
          <span class="self-name">
            ${post.location}
          </span>
          <span class="caption">
            ${post.caption}
          </span>
        </div>

        <div class="show-comments-container">
          View all
            <span class="js-comment-list">
              ${post.commentCount} reviews
            </span>
        </div>

        <div class="comment-container">
          <input type="text" id="commentInput" class="comment-box" placeholder="Write a review">
          <button class="comment-button" onclick="addComment()">
            <img class="send-icon" src="/icons/paper-plane-top.svg">
          </button>
        </div>
      </div>
`;
});

document.querySelector('.news-feed-grid')
  .innerHTML = postHTML;


function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentList = document.getElementById('commentList');

  if (commentInput.value.trim() !== "") {
    const newComment = document.createElement('li');
    newComment.className = 'comment-item';
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = "";
  } else {
    alert("Please enter a comment before submitting.");
  }
}

document.querySelector('.header-settings-icon')
  .addEventListener('click', () => {
    window.location.href = 'settings.html';
  });

const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modalContainer = document.getElementById('modal-container');


openModal.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
})

function postMedia() {
  const mediaUpload = document.getElementById("mediaUpload"); // File input
  const captionInput = document.getElementById("captionInput"); // Caption textarea
  const feed = document.getElementById("feed"); // Feed container

  if (mediaUpload.files.length === 0) {
    alert("Please select an image or video before posting.");
    return;
  }

  const file = mediaUpload.files[0]; // Get the first file
  const reader = new FileReader();

  reader.onload = function (event) {
    const postDiv = document.createElement("div"); // Create post container
    postDiv.classList.add("post");

    let mediaElement;

    if (file.type.startsWith("image/")) {
      mediaElement = document.createElement("img");
      mediaElement.src = event.target.result; // Set image source
    } else if (file.type.startsWith("video/")) {
      mediaElement = document.createElement("video");
      mediaElement.src = event.target.result; // Set video source
      mediaElement.controls = true; // Enable video controls (play, pause, etc.)
    } else {
      alert("Only image and video files are allowed.");
      return;
    }

    const captionElement = document.createElement("p");
    captionElement.classList.add("caption");
    captionElement.textContent = captionInput.value; // Set caption text

    postDiv.appendChild(mediaElement);
    postDiv.appendChild(captionElement);
    feed.prepend(postDiv); // Add the new post to the top of the feed

    // Reset input fields
    mediaUpload.value = "";
    captionInput.value = "";
  };

  reader.readAsDataURL(file);
}