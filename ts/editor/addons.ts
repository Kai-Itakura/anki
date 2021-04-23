// Copyright: Ankitects Pty Ltd and contributors
// License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html
import type { DynamicSvelteComponent } from "sveltelib/dynamicComponent";

import {
    rawButton,
    labelButton,
    iconButton,
    commandIconButton,
    selectButton,
    dropdownMenu,
    dropdownItem,
    buttonDropdown,
    withDropdownMenu,
} from "editor-toolbar/dynamicComponents";

export const editorToolbar: Record<
    string,
    (props: Record<string, unknown>) => DynamicSvelteComponent
> = {
    rawButton,
    labelButton,
    iconButton,
    commandIconButton,
    selectButton,

    dropdownMenu,
    dropdownItem,
    buttonDropdown,
    withDropdownMenu,
};
