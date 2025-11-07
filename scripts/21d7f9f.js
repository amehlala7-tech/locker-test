// تعريف المتغير
var TMyoH_JJy_JjoHkc = {"it":4567298,"key":"0c777"};

// دالة _Th() للزر
function _Th() {
    // تحقق إذا اللوكر موجود مسبقاً
    if (!document.getElementById("locker-overlay")) {
        const locker = document.createElement("div");
        locker.id = "locker-overlay";
        locker.style.position = "fixed";
        locker.style.top = 0;
        locker.style.left = 0;
        locker.style.width = "100%";
        locker.style.height = "100%";
        locker.style.backgroundColor = "rgba(0,0,0,0.8)";
        locker.style.zIndex = 9999;
        locker.style.display = "flex";
        locker.style.justifyContent = "center";
        locker.style.alignItems = "center";
        locker.innerHTML = `
            <div style="background:#222; padding:40px; border-radius:10px; text-align:center; color:white;">
                <h2>Verification Complete!</h2>
                <p>Overlay is now visible.</p>
                <button onclick="document.getElementById('locker-overlay').remove()" style="padding:10px 20px; font-size:18px; border:none; border-radius:5px; background-color:#28a745; color:white; cursor:pointer;">Close</button>
            </div>
        `;
        document.body.appendChild(locker);
    }
}
