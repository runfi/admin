export default function display_debug_info(label, ...args) {
    if (!window.console) {
        return;
    }
    console.groupCollapsed(label);
    args.forEach(item => {
        if (typeof item === "object" && !Array.isArray(item)) {
            Object.keys(item).forEach(key => {
                console.log(`${key}:`, item[key]);
            });
        } else {
            console.log(item);
        }
    });
    console.groupEnd();
}
