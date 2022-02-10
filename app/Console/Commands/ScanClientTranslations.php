<?php

namespace App\Console\Commands;

use App\Models\Language;
use Illuminate\Console\Command;
use Spatie\TranslationLoader\LanguageLine;

class ScanClientTranslations extends Command
{
    /**
     *  The name and signature of the console command
     *
     * @var string
     */
    protected $signature = 'scan:clientTranslations';

    /**
     * The console command description
     *
     * @var string
     */
    protected $description = 'Scan client side language translations from lang folder.';

    /**
     *  functions names
     *
     * @var string[]
     */
    protected $functions = ['lang','trans','__'];

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle(): void
    {

        $path = base_path() . '/resources/lang/locale.php';


        $this->info('Start read files recursive.');
        $content  = require $path;

        $this->info('End read files.');
        $results = ['single' => [], 'group' => []];


        $this->info('Scan files start.');

        $results["group"]["client"] = $content;

        $this->info('Scan files end.');

        $this->info('Import keys into LanguageLines.');
        foreach ($results['group'] as $group => $result) {
            $defaultLanguage = Language::where('default', true)->first();
            if (null === $defaultLanguage) {
                throw new \RuntimeException("Default language not exists.");
                break;
            }

//            $keys = array_keys($result);
            foreach ($result as $key => $value) {

                $text = [];
                $languageLine = LanguageLine::where('group',$group)
                    ->where('key',$key)->first();
                if (null !== $languageLine) {
                    continue;
                }

                $text[$defaultLanguage->locale] = !empty($value)? $value : $key;
                $this->info('Insert into language lines -  '. $key);
                LanguageLine::create([
                    'group' => $group,
                    'key' => $key,
                    'text' => $text
                ]);
            }
        }
        $this->info('LanguageLines updated..');
    }

    /**
     * @param string $path
     *
     * @return \Generator
     */
    protected function filesIn(string $path): \Generator
    {
        if (! is_dir($path)) {
            throw new \RuntimeException("{$path} is not a directory ");
        }

        $it = new \RecursiveDirectoryIterator($path);
        $it = new \RecursiveIteratorIterator($it);
        yield from new \RegexIterator($it, '/\.php$/', \RegexIterator::MATCH);
    }
}
