from xtconfig import config

import nextpy as xt

# This code block represents a style dictionary generated using a large language model (LLM). 
# The original prompt for this generation was: "Generate a style dictionary for the following code [paste the code here]".
# Additionally, we have developed the "Nextpy Style Assistant", a tool designed to assist in code styling and best practices. 
# This assistant will be available on our Discord server soon for further support and guidance in code styling.

style = {
    "heading": {
        "text_align": "center",
        "font_size": "28px",
        "line_height": "36px",
        "color": "#F3F5F7",
        "font_family": "DM Sans",
        "max_width": "620px",
        "padding_top": "16px",
        "padding_bottom": "16px",
    },
    "error_text":{
        "text_align": "center",
        "font_size": "16px",
        "color":"red",
        "line_height": "36px",
        "font_family": "DM Sans",
        "max_width": "620px",
    },
    "label": {
        "text_align": "center",
        "font_size": "16px",
        "line_height": "36px",
        "color": "#F3F5F7",
        "font_family": "DM Sans",
        "max_width": "620px",

    },
    "get_started_box": {
        "font_family": "Inter",
        "text_align": "center",
        "font_size": "14px",
        "color": "black",
        "background": "white",
        "padding_x": "48px",
        "padding_y": "12px",
        "border_radius": "lg",
        "width":"50%",
    },
    "vertical_stack_style": {
        "background": "#04090B",
        "height": "100vh",
        "padding_top": "10%",
        "padding_left":"5%",
        "padding_right":"5%",
    },
    "button":{
        "border_radius":"10px",
        "box_shadow":"0 5px 15px rgba(0, 0, 0, 0.3)",
        "background_image":"linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
        "color":"white",
        "width":"100px",
        "_hover":{"background": "lightgrey"}
    }
    
}

docs_url = "https://nextpy.org/nextpy/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"

class State(xt.State):
    """The app state."""
    binary: str 
    power: int = 0
    result: int = 0
    error: str

    
    def convert(self):
        for letter in self.binary[::-1]:
            temp=int(letter)
            if not(temp==0 or temp==1):
                self.error="Please Enter Binary Number"
                break
            self.result+= (temp*(2**self.power))
            self.power+=1

            

    def clear(self):
        self.binary=""
        self.power=0
        self.result=0
        self.error=""



def index() -> xt.Component:
    return xt.fragment(
        xt.vstack(
            xt.text("Binary To Decimal Converter", **style["heading"]),
            xt.text(f"{State.error}", **style["error_text"]),
            xt.input(placeholder="Enter Binary Number", on_change=State.set_binary, **style["get_started_box"]),
            xt.hstack(
                xt.button(
                        "Convert",
                        on_click=State.convert,
                        **style["button"]
                ),
                xt.button(
                        "Clear",
                        on_click=State.clear,
                        **style["button"]
                )
            ),
            xt.text(f"Decimal: {State.result}", **style["label"]),
            **style["vertical_stack_style"]
        ),
        
    )

# Add state and page to the app.
app = xt.App(
    # Add fonts here!
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&family=Inter&display=swap",
    ],
)
app.add_page(index)
