import React from "react";
import Bold from "../lines/bold"; 
import Light from "../lines/light"
import styles from "./option.module.css"; 

const linestyle = {
  marginTop: "16px",
  marginBottom: "20px",
};
const ligthstyle = {
  marginTop: "10px",
  marginBottom: "10px",
};
const OptionSelector = ({
  optionsData,
  selectedOption,
  handleOptionSelect,
  handleDeviceSelect,
  handleSessionSelect,
  AreaSelect,
  
}) => {
  return (
    <div>
      {optionsData?.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          {item.default === null ? (
            <div>
              {item.consultation !== null ? (
                <div className={styles.constContainer}>
                  <div className={styles.constChildContainer}>
                    <div>Consultation only</div>
                    <div className={styles.duration}>
                      {" "}
                      - {item.consultation.duration} min
                    </div>
                  </div>
                  <div>
                    <div className={styles.price}>
                      AED {item.consultation.price}
                    </div>
                    <input
                      type="radio"
                      value="consultation"
                      onClick={handleOptionSelect}
                      name="option"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <Bold additionalStyles={linestyle} />
              <div className={styles.SelectHeader}>
                <div>Body area</div>
                <div>Required</div>
              </div>
              {item.bodyAreas.map((area, index) => (
                <div key={index}>
                  <div className={styles.optionsContainer}>
                    <div>
                      <div className={styles.name}>
                        {area.name}{" "}
                        <span className={styles.duration}>
                          -{area.duration} min
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className={styles.price}>AED {area.price}</p>
                      <input
                        type="radio"
                        value={area.name}
                        onClick={handleOptionSelect}
                        name="option"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {selectedOption !== "consultation" &&
                AreaSelect &&
                AreaSelect.devices !== null && (
                  <div>
                    <Bold additionalStyles={linestyle} />
                    <div className={styles.SelectHeader}>
                      <div>Devices</div>
                      <div>Required</div>
                    </div>
                    {AreaSelect.devices.map((device, index) => (
                      <div key={index}>
                        <div className={styles.optionsContainer}>
                          <div className={styles.right}>
                            <div>
                              {device.name}
                              <span className={styles.duration}>
                                -{device.duration} min
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className={styles.price}>
                              AED {device.price}
                            </div>
                            <input
                              type="radio"
                              name="device"
                              value={device.name}
                              onClick={handleDeviceSelect}
                            />
                          </div>
                        </div>
                        {index !== AreaSelect.devices.length - 1 && (
                          <Light additionalStyles={linestyle} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              {selectedOption !== "consultation" &&
                AreaSelect &&
                AreaSelect.sessions !== null && (
                  <div>
                    <Bold additionalStyles={linestyle} />
                    <div className={styles.SelectHeader}>
                      <div>Sessions</div>
                      <div>Required</div>
                    </div>
                    {AreaSelect.sessions?.map((session, index) => (
                      <div key={index}>
                        <div className={styles.optionsContainer}>
                          <div>
                            <div>
                              {session.name}{" "}
                              <span className={styles.duration}>
                                -{session.duration} min
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className={styles.price}>AED {session.price}</p>
                            <input
                              type="radio"
                              value={session.sessions}
                              onClick={handleSessionSelect}
                            />
                          </div>
                        </div>
                        {index !== AreaSelect.sessions.length - 1 && (
                          <Light additionalStyles={linestyle} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ) : (
            <div>
              {item.consultation !== null ? (
                <div className={styles.constContainer}>
                  <div className={styles.constChildContainer}>
                    <div>Consultation only</div>
                    <div className={styles.duration}>
                      {" "}
                      - {item.consultation.duration} min
                    </div>
                  </div>
                  <div>
                    <div className={styles.price}>
                      AED {item.consultation.price}
                    </div>
                    <input
                      type="radio"
                      value="consultation"
                      onClick={handleOptionSelect}
                      name="option"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <Bold additionalStyles={linestyle} />
              <div className={styles.constContainer}>
                <div className={styles.constChildContainer}>
                  <div>Default name</div>
                  <div className={styles.duration}>
                    {" "}
                    - {item.default.duration} min
                  </div>
                </div>
                <div>
                  <div className={styles.price}>AED {item.default.price}</div>
                  <input
                    type="radio"
                    value="default"
                    onClick={handleOptionSelect}
                    name="option"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionSelector;
