var AppRouter = Backbone.Router.extend({

    routes:{
        /^#(\/)?$/: "home"
			  // , "#/login/": ""
			  // , "#/couchapps/": ""
			  // , "#/db/:database/": ""
			  // , "#/db/:database/_create_doc/": ""
			  // , "#/db/:database/_delete/": ""
			  // , "#/db/:database/_compact/": ""
			  // , "#/db/:db/views/*view": ""
			  // , "#/db/:db/:doc/:key/_delete/": ""
			  // , "#/db/:db/:doc/_delete/": ""
			  // , "#/db/:db/:doc/": ""
			  // , "#/db/:db/:doc/rev/:rev/:key/": ""
			  // , "#/db/:db/:doc/rev/:rev/": ""
			  // , "#/db/:db/changes": ""
			  // , "#/db/": ""
			  // , "#/replication/": ""
			  // , "#/replication/:id": ""
			  // , "#/config/": ""
			  // , "#/config/:section/": ""
			  // , "#/tasks/": ""
			  // , "#/account/": ""
			  // , "#create_db": ""
			  // , "#create_doc": ""
			  // , "#logout": ""
			  // , "#login": ""
			  // , "#addkey": ""
			  // , "#savekey": ""
			  // , "#replication": ""
			  // , "#delete_replication": ""
			  // , "#toggle_replication": ""
			  // , "#config": ""
			  // , "#delete_database": ""
			  // , "#compact_database": ""
			  // , "#delete_key": ""
			  // , "#delete_doc": ""
			  
    },

    initialize:function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);

        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
    },

    home:function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        }
        $('#content').html(this.homeView.el);
    },

});

tpl.loadTemplates(['changes_tpl', 'config_section_tpl', 'config_top_tpl', 'confirm_tpl', 'couchapps_tpl', 'create_doc_tpl', 'database_tpl', 'database_view_tpl', 'databases_tpl', 'document_tpl', 'edit_key_tpl', 'home_tpl', 'logged_in', 'logged_in_btn', 'logged_out', 'logged_out_btn', 'replication_doc_tpl', 'replication_items', 'replication_tpl', 'tasks_tpl', 'unauthorized_tpl'], function() {
    app = new AppRouter();
		Backbone.history.start();
});