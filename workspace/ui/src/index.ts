// src/index.ts
import { App } from 'vue';
import MainPagination from './components/pagination/Ui.vue';
import '../../styles/index';
import MainBtn from './components/button/Core.vue';
import mainInput from './components/input/Core.vue';

import { tooltip } from './directives/TooltipDirective';

export { MainPagination };

export default {
    install(app: App) {
        app.directive('tooltipl', tooltip);
        app.component('Main', MainPagination);
        app.component('MainBtn', MainBtn);
        app.component('MainInput',mainInput)

    },
};
