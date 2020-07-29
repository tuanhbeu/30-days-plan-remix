(function () {
    new Vue({
        el: "#juno_okyo", data: {
            days: 'Chia s\u1ebb m\u1ed9t b\u00e0i \u0111\u0103ng;\u0110\u0103ng c\u00e2u tr\u00edch d\u1eabn truy\u1ec1n c\u1ea3m h\u1ee9ng;\u0110\u0103ng chuy\u1ec7n h\u1eadu tr\u01b0\u1eddng ho\u1eb7c \u1ea3nh \u0111\u1eddi th\u01b0\u1eddng;\u0110\u0103ng m\u1eb9o v\u1eb7t;Gi\u1edbi thi\u1ec7u m\u1ed9t cu\u1ed1n s\u00e1ch m\u00e0 b\u1ea1n th\u00edch;\u0110\u0103ng b\u00e0i d\u1ea1ng khuy\u1ebfn kh\u00edch "\u0111i\u1ec1n v\u00e0o ch\u1ed7 tr\u1ed1ng";\u0110\u0103ng c\u1ea3m nh\u1eadn, ph\u1ea3n h\u1ed3i c\u1ee7a kh\u00e1ch h\u00e0ng;H\u00ecnh \u1ea3nh s\u1ea3n ph\u1ea9m b\u1ea1n \u0111ang b\u00e1n;\u0110\u0103ng h\u00ecnh \u1ea3nh th\u1eadt c\u1ee7a ch\u00ednh b\u1ea1n ho\u1eb7c team b\u1ea1n;\u0110\u0103ng m\u1ea5y n\u1ed9i dung ki\u1ec3u "h\u00e9 l\u1ed9", "b\u1eadt m\u00ed" tr\u01b0\u1edbc (teaser);Qu\u1ea3ng c\u00e1o vi\u1ec7c cho t\u1ea3i mi\u1ec5n ph\u00ed c\u00e1i g\u00ec \u0111\u00f3 (c\u1ee7a b\u1ea1n);\u0110\u1eb7t m\u1ed9t c\u00e2u h\u1ecfi;Chia s\u1ebb ngu\u1ed3n t\u00e0i nguy\u00ean n\u00e0o \u0111\u00f3 b\u1ea1n th\u00edch ho\u1eb7c c\u00f4ng c\u1ee5 m\u00e0 b\u1ea1n d\u00f9ng;\u0110\u0103ng clip ng\u1eafn;\u0110\u0103ng l\u1ea1i m\u1ed9t b\u00e0i \u0111\u0103ng h\u1eefu \u00edch c\u1ee7a ng\u01b0\u1eddi kh\u00e1c;Gi\u1edbi thi\u1ec7u m\u1ed9t s\u1ea3n ph\u1ea9m b\u1ea1n \u01b0a th\u00edch;Chia s\u1ebb trang web ho\u1eb7c blog b\u1ea1n th\u1ea5y l\u00fd th\u00fa;Tag m\u1ed9t \u0111\u1ee9a b\u1ea1n ho\u1eb7c ng\u01b0\u1eddi n\u00e0o m\u00e0 b\u1ea1n h\u00e2m m\u1ed9;Chia s\u1ebb v\u1ec1 s\u1ea3n ph\u1ea9m, d\u1ecbch v\u1ee5 c\u1ee7a b\u1ea1n;Khuy\u1ebfn kh\u00edch kh\u00e1ch h\u00e0ng \u0111\u0103ng k\u00fd nh\u1eadn Newsletter t\u1eeb b\u1ea1n;\u0110\u0103ng m\u1ed9t c\u00e2u chuy\u1ec7n truy\u1ec1n c\u1ea3m h\u1ee9ng ho\u1eb7c v\u01b0\u1ee3t kh\u00f3 th\u00e0nh c\u00f4ng;\u0110\u0103ng h\u00ecnh ch\u1ee5p n\u01a1i l\u00e0m vi\u1ec7c;Chia s\u1ebb m\u1ed9t b\u00e0i b\u1ea1n t\u1eebng \u0111\u0103ng tr\u00ean trang kh\u00e1c;\u0110\u0103ng c\u00e2u tr\u00edch d\u1eabn t\u1eeb ng\u01b0\u1eddi m\u00e0 b\u1ea1n coi nh\u01b0 anh h\u00f9ng;Tung \u01b0u \u0111\u00e3i gi\u1ea3m gi\u00e1 ho\u1eb7c m\u00e3 khuy\u1ebfn m\u00e3i;\u0110\u0103ng th\u1ed1ng k\u00ea g\u00e2y s\u1ed1c v\u1ec1 ng\u00e0nh b\u1ea1n kinh doanh;\u0110\u0103ng c\u00e2u tr\u00edch d\u1eabn t\u1ea1o \u0111\u1ed9ng l\u1ef1c;\u0110\u0103ng h\u00ecnh selfie ch\u00ednh b\u1ea1n ho\u1eb7c \u1ea3nh ch\u1ee5p n\u01a1i l\u00e0m vi\u1ec7c c\u1ee7a b\u1ea1n;\u0110\u0103ng \u1ea3nh hay clip hay b\u1ea5t k\u1ef3 c\u00e1i g\u00ec th\u1eadt vui nh\u1ed9n v\u00e0o;\u0110\u0103ng h\u00ecnh ki\u1ec3u "Oaaah s\u1eb5n s\u00e0ng qu\u1ea9y cu\u1ed1i tu\u1ea7n r\u1ed3i \u0111\u00e2y!"'.split(";"),
            loading: {state: !1, btn: ""}, edit_mode: !1
        }, methods: {
            getNewList: function () {
                this.shuffle(this.days)
            }, shuffle: function (a) {
                a.sort(function () {
                    return Math.random() - .5
                })
            }, savePlan: function () {
                var a = this;
                this.loading.state = !0;
                this.loading.btn = "save";
                this.edit_mode && (this.edit_mode = !1);
                localforage.setItem("saved", this.days).then(function (b) {
                    setTimeout(function () {
                        a.loading.state = !1
                    }, 500)
                })["catch"](function (a) {
                    console.error(a)
                })
            }, clearPlan: function () {
                var a = this;
                this.loading.state = !0;
                this.loading.btn = "clear";
                localforage.clear().then(function () {
                    setTimeout(function () {
                        a.loading.state =
                            !1;
                        window.top.location.reload()
                    }, 500)
                })
            }, toggleEditMode: function () {
                this.edit_mode = !this.edit_mode
            }, saveDay: function (a, b) {
                this.days[a] = b
            }
        }, mounted: function () {
            var a = this;
            localforage.getItem("saved").then(function (b) {
                null !== b && (a.days = b)
            })
        }, updated: function () {
            this.edit_mode && document.querySelector("input.form-control").focus()
        }
    })
})();


function copyToClipboard(e) {
    console.log($("#p-" + e).text());
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#p-" + e).text()).select();
    document.execCommand("copy");
    $temp.remove();

}
