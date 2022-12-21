import React from "react";
import "../styles/mainMenu.css";
import "../styles/mainMenuMobile.css";
import "../styles/header.css";
import "../styles/headerMobile.css";

export default function Banner() {
  return (
    <div>
      <div className="banner">        
        <div className="banner-itens">
          <div className="container-lg">
            <div className="row">
              <div className="col">
                <div className="banner-div">
                  <i class="bi bi-camera-reels-fill"></i>
                  <h5>ASSISTA AO VIVO</h5>
                  <a href="#">Morning Show</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <div className="appnews">
                <h6>APPNEWS:</h6>
                <div className="my-carousel">
                  <div className="scroll-1">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde, laboriosam aspernatur, perferendis est totam vel praesentium et itaque illo provident iure quaerat numquam. Quam exercitationem pariatur eaque ea suscipit!</h4>
                  </div>
                  <div className="scroll-2">
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem obcaecati numquam dolorum enim error amet vel maxime consequuntur beatae eos perferendis neque molestias, officia velit, hic, architecto suscipit cupiditate?</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>        
      </div>      
    </div>
  );
}