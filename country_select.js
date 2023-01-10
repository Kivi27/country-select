customElements.define("country-select", class extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link href="css/country_select_style.css" rel="stylesheet" type="text/css">
            
            <div class="country-select">
                <div class="country-select__option">
                    <div class="country-select__name">
                        United States
                    </div>
                    <div class="country-select__navigation">
                        <div class="country-select__flag">
                            <img crossorigin="anonymous" class="country-select__image-flag"
                                 src="https://countryflagsapi.com/svg/us" alt="The United States Of America flag"/>
                        </div>
                        <div class="country-select__arrow-down">
                            <img class="country-select__image-arrow-down" src="asset/arrow_down.svg" alt="Arrow down">
                        </div>
                    </div>
                </div>
                <div class="country-select__option country-select__option_hide">
                    <div class="country-select__name">
                        Australia
                    </div>
                    <div class="country-select__navigation">
                        <div class="country-select__flag">
                            <img crossorigin="anonymous" class="country-select__image-flag"
                                 src="https://countryflagsapi.com/svg/au" alt="Australia flag"/>
                        </div>
                        <div class="country-select__arrow-down">
                            <img class="country-select__image-arrow-down" src="asset/arrow_down.svg" alt="Arrow down">
                        </div>
                    </div>
                </div>
                <div class="country-select__option country-select__option_hide">
                    <div class="country-select__name">
                        Austria
                    </div>
                    <div class="country-select__navigation">
                        <div class="country-select__flag">
                            <img crossorigin="anonymous" class="country-select__image-flag"
                                 src="https://countryflagsapi.com/svg/at" alt="Austria flag"/>
                        </div>
                        <div class="country-select__arrow-down">
                            <img class="country-select__image-arrow-down" src="asset/arrow_down.svg" alt="Arrow down">
                        </div>
                    </div>
                </div>
                <div class="country-select__option country-select__option_hide">
                    <div class="country-select__name">
                        Belgium
                    </div>
                    <div class="country-select__navigation">
                        <div class="country-select__flag">
                            <img crossorigin="anonymous" class="country-select__image-flag"
                                 src="https://countryflagsapi.com/svg/be" alt="Belgium flag"/>
                        </div>
                        <div class="country-select__arrow-down">
                            <img class="country-select__image-arrow-down" src="asset/arrow_down.svg" alt="Arrow down">
                        </div>
                    </div>
                </div>
                <div class="country-select__option country-select__option_hide">
                    <div class="country-select__name">
                        Bulgaria
                    </div>
                    <div class="country-select__navigation">
                        <div class="country-select__flag">
                            <img crossorigin="anonymous" class="country-select__image-flag"
                                 src="https://countryflagsapi.com/svg/bg" alt="Bulgaria flag"/>
                        </div>
                        <div class="country-select__arrow-down">
                            <img class="country-select__image-arrow-down" src="asset/arrow_down.svg" alt="Arrow down">
                        </div>
                    </div>
                </div>
            </div>
        `;

        const countrySelect = this.shadow.querySelector(".country-select");

        this.options = countrySelect.children;
        this.isOpen = false;

        this.initOptions(countrySelect);
    }

    initOptions(countrySelect) {
        for (const option of this.options) {

            option.onclick = () => {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.showAllElement(countrySelect);
                } else {
                    this.isOpen = true;
                    this.selectOption(option);
                }
            }
        }
    }

    showAllElement() {
        for (const option of this.options) {
            option.classList.remove("country-select__option_hide");
        }
    }

    selectOption(selectOption) {
        for (const option of this.options) {
            option.classList.add("country-select__option_hide");
        }

        selectOption.classList.remove("country-select__option_hide");
    }
});
