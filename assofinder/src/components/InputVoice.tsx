import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/components/ui/input-group"
import { Mic} from "lucide-react";
import { Button } from "@/components/ui/button"

function InputVoice({ onVoiceInput, name, placeholder }: { onVoiceInput: (text: string) => void, name: string, placeholder?: string }) {

    const [isListening, setIsListening] = useState(false);
    const [inputValue, setValue] = useState("");

    const handleVoiceInput = () => {

        console.log("Voice input triggered");
       
        if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {

            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
            const recognition = new SpeechRecognition()
            recognition.lang = "fr-FR"
            recognition.continuous = false

            recognition.onstart = () => setIsListening(true)
            recognition.onend = () => setIsListening(false)

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript
                setValue((prev) => prev + (prev ? " " : "") + transcript)
            }

            recognition.start() 


        } else {
            alert("La saisie vocale n'est pas supportée par votre navigateur");
        }
    }

  return (
    <>
      <InputGroup className="py-5">
        <InputGroupInput
          id={name}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => {setValue(e.target.value), onVoiceInput(e.target.value)}}
        />
        <InputGroupAddon>
          <Button type="button" variant="outline" size="sm" onClick={handleVoiceInput} disabled={isListening}>
            <Mic className={`${isListening ? "text-red-500" : ""}`} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  )
}

export default InputVoice;