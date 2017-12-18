<form method="POST" v-on:submit.prevent="updatekeep(fillKeep.id)">
<div class="modal fade" id="edit">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">
					&times;
				</button>
				<h4>Edit </h4>
			</div>
				
			<div class="modal-body">
					<label for="keep">Update Task</label>
					<input type="text" name="keep" class="form-control" v-model="fillKeep.keep">
					<span v-for="error in errors" class="text-danger">@{{ error }}</span>
			</div>

			<div class="modal-footer">
				<input type="submit" class="btn btn-success" value="Update">

			</div>			
		</div>
	</div>
</div>
</form>