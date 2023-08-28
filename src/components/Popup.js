import React from "react";

function Popup({ children }) {
  return (
    <div>
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Cart items
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
