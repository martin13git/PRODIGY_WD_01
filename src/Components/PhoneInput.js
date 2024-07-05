// PhoneInput.js

import React from 'react';

const PhoneInput = () => {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                <select className="input-group-select dropdown-toggle" aria-label="Select country code" defaultValue="">
                    <option value="" disabled>Select country code</option>
                    <option value="+1" data-icon="flag-us">+1 (USA)</option>
                    <option value="+44" data-icon="flag-uk">+44 (UK)</option>
                    <option value="+91" data-icon="flag-in">+91 (India)</option>
                    <option value="+93" data-icon="flag-af">+93 (Afghanistan)</option>
                    <option value="+355" data-icon="flag-al">+355 (Albania)</option>
                    <option value="+213" data-icon="flag-dz">+213 (Algeria)</option>
                    <option value="+376" data-icon="flag-ad">+376 (Andorra)</option>
                    <option value="+244" data-icon="flag-ao">+244 (Angola)</option>
                    <option value="+54" data-icon="flag-ar">+54 (Argentina)</option>
                    <option value="+61" data-icon="flag-au">+61 (Australia)</option>
                    <option value="+32" data-icon="flag-be">+32 (Belgium)</option>
                    <option value="+55" data-icon="flag-br">+55 (Brazil)</option>
                    <option value="+86" data-icon="flag-cn">+86 (China)</option>
                </select>
            </span>
            <input type="tel" className="form-control" placeholder="Enter phone number" aria-label="Recipient's phone number" aria-describedby="basic-addon2"></input>
        </div>
    );
};

export default PhoneInput;
