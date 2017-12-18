@extends('app')
@section('content')
<div id="crud" class="row">
	<div class="col-xs-12">
		<h1 class="page-header">CRUD Laravel y VUEjs</h1>
	</div>
	<div class="col-sm-7">
		<a href="#" class="btn btn-primary pull-right" data-toggle="modal" data-target="#create">New task</a>
		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<th>ID</th>
					<th>Task</th>
					<th colspan="2">
						&nbsp;
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="keep in keeps">
					<td width="10px">@{{ keep.id }}</td>
					<td>@{{ keep.keep }}</td>
					<td width="10px"><a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(keep);">Edit</a></td>
					<td width="10px"> <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deletekeep(keep);">Delete</a></td>
				</tr>
			</tbody>
		</table>
		<nav>
			<ul class="pagination">
				<li v-if="paginate.current_page > 1">
					<a href="#" @click.prevent="changePage(paginate.current_page -1);">
						<span>Back</span>
					</a>
				</li>
				<li v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']">
					<a href="#" @click.prevent="changePage(page)">
						@{{ page }}
					</a>
				</li>
				<li v-if="paginate.current_page < paginate.last_page">
					<a href="#" @click.prevent="changePage(paginate.current_page +1 );">
						<span>Next</span>
					</a>
				</li>

			</ul>
		</nav>
		@include('create')
		@include('edit')
	</div>
	<div class="col-sm-5">
		@{{ $data }}
	</div>
</div>

@endsection