<?php include 'includes/header.php' ?>

<div class="header ui-buttons">
	<h2>Buttons</h2>
</div>
<section class="container">

  <button class="btn color-1 buttons-list" data-color="#2f5398">Click me</button>
  <button class="btn color-2 buttons-list" data-color="#004740">Click me</button>
  <button class="btn color-3 buttons-list" data-color="#f34711">Click me</button>
  <button class="btn color-4 buttons-list" data-color="#d2181c">Click me</button>

  <button class="btn btn-round color-1 buttons-list" data-color="#ffffff">Click me</button>
  <button class="btn btn-round color-2 buttons-list" data-color="#ffffff">Click me</button>
  <button class="btn btn-round color-3 buttons-list" data-color="#ffffff">Click me</button>
  <button class="btn btn-round color-4 buttons-list" data-color="#ffffff">Click me</button>

  <button class="btn btn-border color-1 buttons-list" data-color="#2f5398">Click me</button>
  <button class="btn btn-border color-2 buttons-list" data-color="#004740">Click me</button>
  <button class="btn btn-border color-3 buttons-list" data-color="#f34711">Click me</button>
  <button class="btn btn-border color-4 buttons-list" data-color="#d2181c">Click me</button>

  <button class="btn btn-border btn-round color-1 buttons-list" data-color="#426FC5">Click me</button>
  <button class="btn btn-border btn-round color-2 buttons-list" data-color="#00897b">Click me</button>
  <button class="btn btn-border btn-round color-3 buttons-list" data-color="#f6774f">Click me</button>
  <button class="btn btn-border btn-round color-4 buttons-list" data-color="#e94043">Click me</button>

</section>

<div class="header ui-buttons">
	<h2>Dropzone</h2>
</div>

 <div class="zone">

  <div id="dropZ">
    <i class="fa fa-cloud-upload"></i>
    <div>Drag and drop your file here</div>                    
    <span>OR</span>
    <div class="selectFile">       
      <label for="file">Select file</label>                   
      <input type="file" name="files[]" id="file">
    </div>
    <p>File size limit : 10 MB</p>
  </div>

</div>

<?php include 'includes/footer.php' ?>
