export function getUrlParam(name, extra = "extra") {
    let get = _name => {
        let reg = new RegExp(`[?&]${_name}=([^&#]*)`, "i");
        let res = window.location.href.match(reg);
        if (res && res.length > 1) {
            return decodeURIComponent(res[1]);
        }
        return "";
    };

    let res = get(name);
    // 若存在参数则直接返回
    if (res) {
        return res;
    }

    // 若不存在，则检测需要的参数是否包含在extra中
    let _addparams = get(extra);

    if (_addparams) {
        try {
            let info = JSON.parse(_addparams);
            return info[name];
        } catch (e) {}
    }

    return "";
}
