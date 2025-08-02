import React, { useEffect } from "react";
import "./maincontent.css";
import ShinyText from "./../ShinyText/ShinyText.jsx";

function MainContent({ onGetJokes }) {
  useEffect(() => {
    const toggleCheckbox = document.getElementById("input-toggle");
    const cardWrapper = document.getElementById("card-wrapper");
    const ball = document.querySelector(".ball");

    if (toggleCheckbox && cardWrapper && ball) {
      toggleCheckbox.addEventListener("change", function () {
        if (this.checked) {
          cardWrapper.style.transform = "rotateY(180deg)";
          ball.style.transform = "translateX(50px) rotate(360deg)";
        } else {
          cardWrapper.style.transform = "rotateY(0deg)";
          ball.style.transform = "translateX(0) rotate(0deg)";
        }
      });
    }
  }, []);

  const handleSubmit = () => {
    const language = document.getElementById("language").value;
    const type = document.getElementById("type").value;
    const amount = document.getElementById("amount").value;
    const id = document.getElementById("id").value;

    if (!language || !type) {
      alert("Please select language and type.");
      return;
    }

    const formValues = {
      language,
      type,
      amount,
      id,
    };

    onGetJokes(formValues);
  };

  return (
    <>
      <div className="sectionr">
        <div className="row full-height justify-content-center center">
          <div className="try">
            <div className="section text-center ">
              <h6 className="mb-0 pb-0 gap info">
                <span>Instructions</span>
                <span>Get Joke</span>
              </h6>

              <div className="checkbox__container">
                <input
                  type="checkbox"
                  id="input-toggle"
                  className="input-toggle"
                />
                <label htmlFor="input-toggle" className="label-for-toggle">
                  <span className="ball">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </label>
              </div>

              <div className="center-container">
                <div className="card-3d-wrap">
                  <div className="card-3d-wrapper" id="card-wrapper">
                    <div className="card-3d-wrap">
                      <div className="card-3d-wrapper" id="card-wrapper">
                        {/* Front Side */}
                        <div className="card-front">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4>Instructions</h4>
                              <div className="instructions-wrapper">
                                <p className="instructions">
                                  {/* your instructions here */}
                                  In the <strong>language section</strong>, you
                                  can choose your preferred language for the
                                  jokes. Available languages include: English,
                                  Spanish, German, French, Portuguese, Czech.
                                  Please ensure you select a language before
                                  generating your joke.
                                  <br />
                                  <br />
                                  In the <strong>type of joke</strong> section,
                                  you can choose what kind of jokes you want:
                                  Programming, Miscellaneous, Dark, Pun, Spooky,
                                  Christmas, Any (for random jokes of any type).
                                  If you input an
                                  <strong>ID</strong> in the form, the joke type
                                  will automatically be set to{" "}
                                  <strong>Any</strong>, as specific IDs are not
                                  associated with a particular joke type. <br />
                                  <br />
                                  In the <strong>amount of jokes</strong>{" "}
                                  section, you can specify how many jokes you
                                  want to generate. The minimum number is{" "}
                                  <strong>1</strong>, and the maximum number is{" "}
                                  <strong>10</strong>. <br />
                                  <br />
                                  In the <strong>ID section</strong>, you can
                                  request a joke by a specific{" "}
                                  <strong>ID</strong>. However, keep in mind: If
                                  an ID is provided, the{" "}
                                  <strong>amount of jokes</strong> will
                                  automatically be limited to <strong>1</strong>
                                  , because an ID corresponds to a single joke.
                                  The <strong>type of joke</strong> will also be
                                  set to
                                  <strong>Any</strong> since a joke ID isn't
                                  tied to a specific type of joke. <br />
                                  <br />
                                  By following these guidelines, you’ll ensure
                                  that the joke generator works as expected.
                                  <br />
                                  <br />
                                  <span className="toggle">
                                    Click on the button to toggle to the joke
                                    generator
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="card-back">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">Get Jokes</h4>
                              <form>
                                <div className="form-group">
                                  <select
                                    id="language"
                                    name="language"
                                    required
                                  >
                                    <option value="">Select Language</option>
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="de">German</option>
                                    <option value="fr">French</option>
                                    <option value="pt">Portuguese</option>
                                    <option value="cs">Czech</option>
                                  </select>
                                </div>

                                <div className="form-group mt-2">
                                  <select id="type" name="type" required>
                                    <option value="">Select Joke Type</option>
                                    <option value="any">Any</option>
                                    <option value="programming">
                                      Programming
                                    </option>
                                    <option value="misc">Miscellaneous</option>
                                    <option value="dark">Dark</option>
                                    <option value="pun">Pun</option>
                                    <option value="spooky">Spooky</option>
                                    <option value="christmas">Christmas</option>
                                  </select>
                                </div>

                                <div className="form-group mt-2">
                                  <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    min="1"
                                    max="10"
                                    placeholder="Number of Jokes"
                                    defaultValue="1"
                                    required
                                  />
                                </div>

                                <div className="form-group mt-2">
                                  <input
                                    type="text"
                                    id="id"
                                    name="id"
                                    placeholder="ID (Optional)"
                                  />
                                </div>

                                <button
                                  type="button"
                                  onClick={handleSubmit}
                                  className="p-2  rounded-3"
                                >
                                  {" "}
                                  <ShinyText
                                    text="Get Jokes"
                                    disabled={false}
                                    speed={3}
                                    className="custom-class"
                                  />
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
