import React from "react";
import NavbarAdmin from "./NavbarAdmin"
import PhysioContent from "../../public/PhysioContent.jpg"

export default function ContentcontainerAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <div id="contentContainer">
        
        <div className="card-group">
          <div className="card">
            <div className="card-body" id="contentCard">
              <img id="physioImage" src={PhysioContent} height={40} />
              <h4 className="card-title">Routine 1</h4>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                UPDATE
              </button>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                DELETE
              </button>
            </div>
            <div className="card-body" id="contentCard">
              <img id="physioImage" src={PhysioContent} height={40} />
              <h4 className="card-title">Routine 2</h4>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                UPDATE
              </button>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                DELETE
              </button>
            </div>
            <button
              className="btn btn-primary"
              id="addContentButton"
              type="button"
            >
              ADD CONTENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
