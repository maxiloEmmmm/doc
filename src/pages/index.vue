<script>
export default {
    data(){
        return {
            selectedKeys: [this.$route.fullPath]
        }
    },
    render() {
        return <a-layout>
            <a-layout-header style="background: #fff; padding: 0">Header</a-layout-header>
            <a-layout>
                <a-layout-sider theme="light">
                    <a-menu mode="inline" openKeys={['/vue', '/pkg']} selectedKeys={this.selectedKeys} vOn:select={({selectedKeys}) => this.selectedKeys = selectedKeys}>
                        <a-sub-menu key="/vue" title='Vue'>
                            <a-menu-item key="/vue/src">
                                <a-icon type="video-camera" />
                                <router-link to={{path: '/vue/src'}} tag='span'>Vue</router-link>
                            </a-menu-item>
                            {/*<a-menu-item key="1-2">
                                <a-icon type="video-camera" />
                                <span class="nav-text">Vue-Router</span>
                            </a-menu-item>
                            <a-menu-item key="1-3">
                                <a-icon type="video-camera" />
                                <span class="nav-text">Vuex</span>
                            </a-menu-item>*/}
                        </a-sub-menu>
                        <a-sub-menu key="/pkg" title='Pkg'>
                            {/*<a-menu-item key="2-1">
                                <a-icon type="video-camera" />
                                <span class="nav-text">Framework</span>
                            </a-menu-item>
                            <a-menu-item key="2-2">
                                <a-icon type="video-camera" />
                                <span class="nav-text">YszUI</span>
                            </a-menu-item>*/}
                            <a-menu-item key="/pkg/antd-vue-tool">
                                <a-icon type="video-camera" />
                                <router-link to={{path: '/pkg/antd-vue-tool'}} tag='span'>Antd-Vue-Tool</router-link>
                            </a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout-content style={{ margin: '24px 16px', padding: '24px', minHeight: '280px' }}><router-view></router-view></a-layout-content>
            </a-layout>
        </a-layout>
    }
}
</script>