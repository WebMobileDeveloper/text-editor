I want the web app page with three panes:
1. Input editor
2. Output editor
3. Snippet selector

There are the pre-defined APIs for finding snippets in the input editor, and inserting them to the output editor, whenever they are clicked in the snippet list.

Whenever new text appears in input editor, app should query the snippet API on list of things to display in the snippet view. Whenever snippet is selected, the template should be generated in output editor, with highlighting unfilled parts.

Text in the input and output editor should have option to [attach](http://pupunzi.github.io/jquery.mb.balloon/index.html) [balloons](https://www.npmjs.com/package/jquery-balloon-js).
Balloons in the output editor should allow for selection of options to fill in.

There will be style requirements for the job:
1. Clear JavaScript
2. Clean CSS for easy style changes in the future
3. Branding elements with CSS only

*PureScript* programmers particularly *welcome*.
