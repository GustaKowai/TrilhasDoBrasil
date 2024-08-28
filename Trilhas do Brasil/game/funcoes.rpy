#Função de som de falas dos personagens
init python:
    def low_beep(event, **kwargs):
        if event == "show":
            renpy.music.play("audio/sfx/bip.ogg", channel="textSound", loop=True, relative_volume=1.5)
        elif event == "slow_done" or event == "end":
            renpy.music.stop(channel="textSound")

