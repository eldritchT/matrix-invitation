const params = new URLSearchParams(
    "?" + window.location.hash.replace("#", "").split("?")[1]
)
const paramsAsObject = Object.fromEntries(params)

function main() {
    if ("via" in paramsAsObject) {
        $("#spanServerName").html(paramsAsObject.via)
    } else {
        $("#sectionVia").hide()
    }
    $("#buttonJoin").on("click", function () {
        open(`element://vector/webapp/#/room/${window.location.hash.replace("#/", "")}`)
    })
    $("#buttonCopyId").on("click", function () {
        let chatId = window.location.hash.replace("#/", "").split("?")[0]
        try {
            navigator.clipboard.writeText(chatId)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    })
}

addEventListener("DOMContentLoaded", main)