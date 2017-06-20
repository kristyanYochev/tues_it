$(document).ready(function() {
    $('#overview_sub').toggle('show')
    $('#prerequisites_sub').toggle('show')
    $("#tutorial_sub").toggle('show')

    $("#overview").click(function() {
        $('#overview_sub').toggle('show')
    })

    $("#prerequisites").click(function() {
        $('#prerequisites_sub').toggle('show')
    })

    $("#tutorial").click(function() {
        $('#tutorial_sub').toggle('show')
    })  
})