@props([
    'message',
    'letters'
    ])

<div     {{ $attributes->class('[text-white text-center flex gap-7]') }}>
    @php
        $words = explode(' ', $message);
    @endphp
    @foreach($words as $word)
        <div class="word">
            @foreach(str_split($word) as $char)
                <span class="material-symbols-outlined">{{ $this->letters[strtolower($char)] ?? $char }}</span>
            @endforeach
        </div>
    @endforeach
</div>
