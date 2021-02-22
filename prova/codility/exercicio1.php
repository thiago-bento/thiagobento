<?php

function solution($S)
{
    $stack = [];

   foreach ($S as $key => $valor) {
       # code...
   }

    return $stack;
}

function parseCommand($string)
{
    return explode(' ', $string);
}

function performOperation($command)
{
    return function($stack) use ($command) {
        $newStack = $stack;

        switch($command) {
            case is_numeric($command):
                array_push($newStack, $command);
                break;

            case "DUP":
                array_push($newStack, end($stack));
                break;

            case "POP":
                array_pop($newStack);
                break;

            case "+":
                $lastElement = array_pop($newStack);
                $preLastElement = array_pop($newStack);
                array_push($newStack, $lastElement + $preLastElement);
                break;

            case "-":
                $lastElement = array_pop($newStack);
                $preLastElement = array_pop($newStack);

                if ($preLastElement === null || ($lastElement - $preLastElement) < 0) {
                    throw new Exception('Not enough items in a stack');
                }

                array_push($newStack, $lastElement - $preLastElement);
                break;
        }

        return $newStack;
    };
}