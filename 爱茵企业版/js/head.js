document.writeln(`
		<div class="header" id="home">
			<div class="top_menu_w3layouts">
				<div class="container">
					<div class="header_left">
						<ul>
							<li><i class="fa fa-map-marker" aria-hidden="true"></i>广东省 佛山市 顺德区</li>
							<li><i class="fa fa-phone" aria-hidden="true"></i> 400-633-8813</li>
							<li><i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:ayinya@yeah.net">ayinya@yeah.net</a></li>
						</ul>
					</div>
					<div class="header_right">
						<ul class="forms_right">
							<li><a href="appointment.html"> 免费试用申请</a> </li>
						</ul>

					</div>
					<div class="clearfix"> </div>
				</div>
			</div>

			<div class="content white">
				<nav class="navbar navbar-default" role="navigation">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<a class="navbar-brand" href="index.html">
								<h1>
									<!--<span class="fa fa-stethoscope" aria-hidden="true"></span>New Clinic -->
									<img src="images/logo.png" alt=" " class="img-responsive" style="height:60px;padding-top:0px;padding-bottom:25px" />
								</h1>
							</a>
						</div>
						
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<nav>
								<ul class="nav navbar-nav">
									<li><a href="index.html">主页</a></li>
									<li><a href="oa.html">OA办公</a></li>

									<li><a href="hr.html">HR管理</a></li>
									<li><a href="cost.html">Cost管理</a></li>
									<li class="dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">ERP管理<b class="caret"></b></a>
										<ul class="dropdown-menu">
											<li><a href="semu.html">色母行业</a></li>
											<li class="divider"></li>
											<li><a href="huagong.html">化工行业</a></li>
											<li class="divider"></li>

										</ul>
									</li>
									<li><a href="mail.html">联系我们</a></li>
								</ul>
							</nav>
						</div>
						<!--/.navbar-collapse-->
						<!--/.navbar-->
					</div>
				</nav>
			</div>
		</div>
`)

	!function(){
		var path=window.location.pathname.split("/").pop();
		document.querySelector(".navbar-nav li a[href='"+path+"']").className="active";
	}()