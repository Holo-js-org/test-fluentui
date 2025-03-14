import { Holo } from 'holo-js';
import '@fluentui/web-components';
const app = Holo.init();
app.render(`
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #0078d4;">Holo + Fluent UI</h1>
        
        <div style="margin: 20px 0;">
            <h2>Interactive Controls</h2>
            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <fluent-button appearance="accent">Primary Action</fluent-button>
                <fluent-button>Secondary Action</fluent-button>
                <fluent-button appearance="stealth">Subtle Action</fluent-button>
            </div>
            
            <div style="margin-bottom: 15px;">
                <fluent-text-field placeholder="Enter your name" value=""></fluent-text-field>
            </div>
            
            <div style="margin-bottom: 15px;">
                <fluent-text-area placeholder="Leave your feedback here" rows="4"></fluent-text-area>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h3>Preferences</h3>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <fluent-checkbox>Subscribe to newsletter</fluent-checkbox>
                    <fluent-checkbox>Enable notifications</fluent-checkbox>
                    <fluent-checkbox>Dark mode</fluent-checkbox>
                </div>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h3>Rating</h3>
                <fluent-slider min="0" max="10" value="7"></fluent-slider>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h3>Choose an option</h3>
                <fluent-radio-group>
                    <fluent-radio value="option1">Option 1</fluent-radio>
                    <fluent-radio value="option2">Option 2</fluent-radio>
                    <fluent-radio value="option3">Option 3</fluent-radio>
                </fluent-radio-group>
            </div>
            
            <div style="margin-top: 25px;">
                <fluent-button appearance="accent">Submit</fluent-button>
                <fluent-button>Cancel</fluent-button>
            </div>
        </div>
        
        <fluent-divider></fluent-divider>
        
        <footer style="margin-top: 20px; color: #666;">
            <p>Made with Holo.js and Fluent UI Web Components</p>
        </footer>
    </div>
`);