import { PlElement, html, css } from "polylib";

class PlBadge extends PlElement {
	static get properties() {
		return {
			pulse: {
				type: Boolean, reflectToAttribute: true
			},
			hidden: {
				type: Boolean, reflectToAttribute: true
			}
		}
	}

	static get css() {
		return css`
           :host {
				align-items: center;
				display: flex;
				font: var(--text-font);
				justify-content: center;
				user-select: none;
            }

			:host([hidden]) {
				display: none;
			}

			span {
				height: var(--base-size-xxs);
				background-color: var(--primary-base);
				box-sizing: border-box;
				border-radius: var(--border-radius);
				color: #ffffff;
				padding: 0 var(--space-xs);
				white-space: nowrap;
				display: flex;
				align-items: center;
			}

			:host([pulse]) span {
				animation: pulse 1.5s infinite;
			}

			@keyframes pulse {
				0% {
					box-shadow: 0 0 0 0 var(--primary-light);
				}
				70% {
					box-shadow: 0 0 0 0.5rem transparent;
				}
				100% {
					box-shadow: 0 0 0 0 transparent;
				}
			}
		`;
	}
	static get template() {
		return html`
			<span role="status">
				<slot></slot>
			</span>
      `;
	}
}

customElements.define('pl-badge', PlBadge);
