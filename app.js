import { Holo } from 'holo-js';
import '@fluentui/web-components';
const app = Holo.init();
app.render(`
    <fluent-button appearance="accent">Click me</fluent-button>
	<p></p>
    <fluent-checkbox>Check me</fluent-checkbox>
	<p></p>
    <fluent-text-field placeholder="Enter text"></fluent-text-field>
`);