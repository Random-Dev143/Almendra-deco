import CarrouselHeader from '@/components/CarrouselHeader.vue';
import NavBar from '@/components/NavBar.vue';
import FooterVue from '@/components/FooterVue.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'CarrouselHeader', typeof __VLS_localComponents, "CarrouselHeader", "carrouselHeader", "carrousel-header"> &
__VLS_WithComponent<'NavBar', typeof __VLS_localComponents, "NavBar", "navBar", "nav-bar"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "RouterView", "RouterView"> &
__VLS_WithComponent<'FooterVue', typeof __VLS_localComponents, "FooterVue", "footerVue", "footer-vue">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.CarrouselHeader; __VLS_components.carrouselHeader; __VLS_components["carrousel-header"];
// @ts-ignore
[CarrouselHeader,];
__VLS_components.NavBar; __VLS_components.navBar; __VLS_components["nav-bar"];
// @ts-ignore
[NavBar,];
__VLS_components.RouterView;
// @ts-ignore
[RouterView,];
__VLS_components.FooterVue; __VLS_components.footerVue; __VLS_components["footer-vue"];
// @ts-ignore
[FooterVue,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, id: ("app"), class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("app"), class: ("container"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'CarrouselHeader' extends keyof typeof __VLS_ctx ? { 'CarrouselHeader': typeof __VLS_ctx.CarrouselHeader; } : 'carrouselHeader' extends keyof typeof __VLS_ctx ? { 'CarrouselHeader': typeof __VLS_ctx.carrouselHeader; } : 'carrousel-header' extends keyof typeof __VLS_ctx ? { 'CarrouselHeader': (typeof __VLS_ctx)["carrousel-header"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).CarrouselHeader;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { CarrouselHeader: typeof __VLS_5; }).CarrouselHeader;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as 'NavBar' extends keyof typeof __VLS_ctx ? { 'NavBar': typeof __VLS_ctx.NavBar; } : 'navBar' extends keyof typeof __VLS_ctx ? { 'NavBar': typeof __VLS_ctx.navBar; } : 'nav-bar' extends keyof typeof __VLS_ctx ? { 'NavBar': (typeof __VLS_ctx)["nav-bar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).NavBar;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { NavBar: typeof __VLS_10; }).NavBar;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { RouterView: typeof __VLS_15; }).RouterView;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = ({} as 'FooterVue' extends keyof typeof __VLS_ctx ? { 'FooterVue': typeof __VLS_ctx.FooterVue; } : 'footerVue' extends keyof typeof __VLS_ctx ? { 'FooterVue': typeof __VLS_ctx.footerVue; } : 'footer-vue' extends keyof typeof __VLS_ctx ? { 'FooterVue': (typeof __VLS_ctx)["footer-vue"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).FooterVue;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { FooterVue: typeof __VLS_20; }).FooterVue;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
