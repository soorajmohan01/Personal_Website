$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxhjz4X9HR1jGUBpVHT8mNcFhTPOIkVAJ6c7NXvnUjz5ntjjPQ3RdK3qw-9cx32-M5tBQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")

        }
    })
})