import Stats from "stats.js";
/**
 * Used for creating Performance Monitor
 */
class StatsManager {
    constructor() {
        this.stats = [new Stats(), new Stats(), new Stats()];
    }

    buildStats() {
        let shift = 0;
        this.stats.forEach((stat, i) => {
            // Create Panel, 0 - fps, 1 - lat, 2 - 0 mem
            stat.showPanel(i);
            stat.domElement.style.cssText = `display: block; position: fixed; bottom: 0px; left: ${shift}px`;
            document.body.appendChild(stat.dom);

            stat.setCSS = (cssText) => {
                stat.domElement.style.cssText = cssText;
            }

            shift += 80;
        });
    }

    begin() {
        this.stats.forEach(s => s.begin());
    }

    end() {
        this.stats.forEach(s => s.end());
    }
}

export default StatsManager;