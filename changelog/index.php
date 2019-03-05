<?php include('../_inc/header.php'); ?>

<header id="menu-bg">
    <div class="container">
        <?php include('../_inc/navigation.php'); ?>
    </div>
</header>

<section id="changelog">
    <div class="container">
        <div class="row center-tiny start-medium">
            <div class="tiny-12">
                <h1>MUDS Editor changelog</h1>

                <br>
                <hr>
                <br>

            </div>
        </div>
        <div class="row">
            <div class="tiny-12 medium-7">

                <h2>MUDS v1.4.0 <a href="/download/muds-editor-v1.4.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                   <li>Refine codeblock style</li>
                    <li>Overhaul of how predefined content works
                        <ul>
                            <li>Implementing textarea for submittable content</li>
                            <li>Adding custom "content subbmit name": <span class="tag">submitName: 'My_Submit_Name'</span></li>
                            <li>Muds should now be initialized with a <span class="tag">textarea</span> and not a <span class="tag">div</span></li>
                            <li>Global Muds variable change from <span class="tag">editor</span> to <span class="tag">muds</span></li>
                        </ul>
                    </li>
                    <li>Adding support for events <ul>
                            <li>Adding <span class="tag">onChange</span> event - <a href="https://muds.io/documentation/events/">docs</a></li>
                        </ul>
                    </li>
                    <li>Fixing a bug where custom height wasn't reapplied when leaving fullscreen</li>
                </ul>

                <br><br>

                <h2>MUDS v1.3.5 <a href="/download/muds-editor-v1.3.5.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Fix bug where separator didn't work with custom menu</li>
                    <li>Adding support for codeblocks</li>
                </ul>

                <br><br>

                <h2>MUDS v1.3.4 <a href="/download/muds-editor-v1.3.4.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Fix broken version 1.3.3</li>
                </ul>

                <br><br>

                <h2>MUDS v1.3.3 <a href="/download/muds-editor-v1.3.3.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Changing order of full and minimal menu option</li>
                    <li>Changing which menu items are available on the minimal menu option</li>
                    <li>Adding separator item to menu</li>
                    <li>Fixing bug where resizing option didn't work automatically</li>
                </ul>

                <br><br>

                <h2>MUDS v1.3.2 <a href="/download/muds-editor-v1.3.2.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Update blockquote keybinding from <span class="tag">Ctrl/Cmd + Q</span> to <span class="tag">Shift + Ctrl/Cmd + B</span></li>
                    <li>The custom menu now allows for custom ordering of items</li>
                </ul>

                <br><br>

                <h2>MUDS v1.3.1 <a href="/download/muds-editor-v1.3.1.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Add keybinding for fullscreen: <span class="tag">Ctrl/Cmd + Enter</span></li>
                    <li>Add keybinding display of text content: <span class="tag">Ctrl/Cmd + O</span></li>
                </ul>

                <br><br>

                <h2>MUDS v1.3.0 <a href="/download/muds-editor-v1.3.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Adjusting default heights of editor content and dropdowns</li>
                    <li>Adjusting default fontsizes of dropdowns</li>
                    <li>Adding body text action</li>
                    <li>Adding tooltips to menu items</li>
                    <li>Adding Blockquote</li>
                    <li>Change darkmode link color from pink to blue</li>
                    <li>Add keybindings:
                        <ul>
                            <li><span class="tag">Tab</span>: inserts 4 spaces at the cursor position</li>
                            <li><span class="tag">Ctrl/Cmd + P</span>: Opens the print dialog</li>
                            <li><span class="tag">Ctrl/Cmd + B</span>: Makes highlighted text bold</li>
                            <li><span class="tag">Ctrl/Cmd + I</span>: Makes highlighted text italic</li>
                            <li><span class="tag">Ctrl/Cmd + A</span>: Highlight everything</li>
                            <li><span class="tag">Ctrl/Cmd + C</span>: Copy highlighted text</li>
                            <li><span class="tag">Ctrl/Cmd + X</span>: Cut highlighted text</li>
                            <li><span class="tag">Ctrl/Cmd + V</span>: Paste from clipboard</li>
                            <li><span class="tag">Ctrl/Cmd + Z</span>: Undo</li>
                            <li><span class="tag">Shift + Ctrl/Cmd + Z</span>: Redo</li>
                            <li><span class="tag">Ctrl/Cmd + Left Arrow</span>: Align Left</li>
                            <li><span class="tag">Ctrl/Cmd + Up Arrow/Down Arrow</span>: Align Center</li>
                            <li><span class="tag">Ctrl/Cmd + Right Arrow</span>: Align Right</li>
                            <li><span class="tag">Shift + Ctrl/Cmd + Right Arrow</span>: Indent</li>
                            <li><span class="tag">Shift + Ctrl/Cmd + Left Arrow</span>: Outdent</li>
                            <li><span class="tag">Shift + Ctrl/Cmd + C</span>: Open "Change Color" dialog</li>
                            <li><span class="tag">Ctrl/Cmd + H</span>: Show HTML</li>
                            <li><span class="tag">Ctrl/Cmd + S</span>: Strikethrough</li>
                            <li><span class="tag">Ctrl/Cmd + L</span>: Open "Insert Link" dialog</li>
                            <li><span class="tag">Ctrl/Cmd + 0</span>: Body Text</li>
                            <li><span class="tag">Ctrl/Cmd + Q</span>: Blockquote</li>
                            <li><span class="tag">Ctrl/Cmd + 1</span>: Header 1</li>
                            <li><span class="tag">Ctrl/Cmd + 2</span>: Header 2</li>
                            <li><span class="tag">Ctrl/Cmd + 3</span>: Header 3</li>
                            <li><span class="tag">Ctrl/Cmd + .</span>: Unordered List</li>
                            <li><span class="tag">Ctrl/Cmd + ,</span>: Ordered List</li>
                        </ul>
                    </li>
                </ul>

                <br><br>

                <h2>MUDS v1.2.1 <a href="/download/muds-editor-v1.2.1.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Fix overflow problem on Font dropdown</li>
                </ul>

                <br><br>

                <h2>MUDS v1.2.0 <a href="/download/muds-editor-v1.2.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Adding resize parameter to editor config</li>
                    <li>Adding font selection</li>
                </ul>

                <br><br>

                <h2>MUDS v1.1.3 <a href="/download/muds-editor-v1.1.3.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Changing order on full menu</li>
                    <li>Implementing individual width to dropdown menus</li>
                    <li>Adjusting font-size in dropdown menus</li>
                    <li>Increasing dropdown visibility in darkmode</li>
                </ul>

                <br><br>

                <h2>MUDS v1.1.2 <a href="/download/muds-editor-v1.1.2.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Fixing a bug where dropdowns would be visible in HTML mode</li>
                    <li>Adding ability remove links</li>
                    <li>Adding in-, and outdent support</li>
                    <li>Adding dropdown for justification features</li>
                </ul>

                <br><br>

                <h2>MUDS v1.1.1 <a href="/download/muds-editor-v1.1.1.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Fixing dropdown menu bug where menu would be skewed to the right</li>
                    <li>Fixing HTML editing in darkmode. Inactive buttons are new clearly indicated in darkmode</li>
                </ul>

                <br><br>

                <h2>MUDS v1.1.0 <a href="/download/muds-editor-v1.1.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>Adding support for editing HTML directly in the editor</li>
                </ul>

                <br><br>

                <h2>MUDS v1.0.0 <a href="/download/muds-editor-v1.0.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
                <ul>
                    <li>We Launched MUDS Editor! Woohooo!</li>
                </ul>
                <br>

            </div>
            <div class="tiny-12 medium-5">
                <h2>Our roadmap</h2>
                <p>We're currently working and a lot exciting changes, among them are:</p>
                <ul>
                    <li>Table support</li>
                    <li><strike>Redesigned documentation</strike></li>
                    <li>Emoji menu (You can already use emojis in the editor)</li>
                    <li><strike>A redesign of HTML editing mode.</strike></li>
                    <li><strike>Custom ordering of menu items</strike></li>
                    <li>Custom themes or some version of injected custom CSS</li>
                    <li>Better image handling capabilities</li>
                    <li><strike>Tooltips on menuitems</strike></li>
                    <li>Color control (both text and background color)</li>
                    <li><strike>Custom font type support</strike></li>
                    <li><strike>Menu item separators</strike></li>
                    <li>Editible links</li>
                    <li><strike>In-, and outdent support</strike></li>
                    <li>Embedded video support</li>
                    <li><strike>Custom keybindings</strike></li>
                    <li><strike>Code block support</strike></li>
                    <li><strike>Quoteblock support</strike></li>
                    <li><strike>Make content more easily submittable</strike></li>
                </ul>
                <br>
                <p>If you have any suggestions, feel free to reach out to <a href="https://twitter.com/Triss90" target="_blank">Tristan White</a>.</p>
            </div>
        </div>
    </div>
</section>

<?php include('../_inc/footer.php'); ?>
