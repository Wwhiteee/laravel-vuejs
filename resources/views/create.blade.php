<form method="POST" v-on:submit.prevent="createkeep">
<div class="modal fade" id="create">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">
					&times;
				</button>
				<h4>New task</h4>
			</div>
				
			<div class="modal-body">
					<label for="keep">Create new keep</label>
					<input type="text" name="keep" class="form-control" v-model="newKeep">
					<span v-for="error in errors" class="text-danger">@{{ error }}</span>
			</div>

			<div class="modal-footer">
				<input type="submit" class="btn btn-success" value="Save">

			</div>			
		</div>
	</div>
</div>
</form>