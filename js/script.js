$(document).ready(function () {
    const charactersData = [
    { firstName: 'Thor', lastName: 'Odinson', info: 'Thor Odinson is a character appearing in American comic books published by Marvel Comics.' },
    { firstName: 'Tony', lastName: 'Stark' , info: 'Anthony Edward Stark is a fictional character primarily portrayed by Robert Downey Jr. in the Marvel Cinematic Universe media franchise—based on the Marvel Comics character of the same name—commonly known by his alias, Iron Man.' },
    { firstName: 'Steve', lastName: 'Rogers', info: 'Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics.' },
    { firstName: 'Carol', lastName: 'Marvel', info: 'Carol Susan Jane Danvers is a character appearing in American comic books published by Marvel Comics. Created by writer Roy Thomas and artist Gene Colan, the character first appeared as an officer in the United States Air Force and a colleague of the Kree superhero Mar-Vell in Marvel Super-Heroes #13.' },
    { firstName: 'Natasha', lastName: 'Romanoff', info: 'Black Widow is a character appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense #52. ' },
    { firstName: 'Wanda', lastName: 'Maximoff', info: 'Wanda Maximoff is a fictional character primarily portrayed by Elizabeth Olsen in the Marvel Cinematic Universe media franchise based on the Marvel Comics character of the same name.' },
    { firstName: 'T', lastName: 'Challa',  info: 'Black Panther is a character appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist-coplotter Jack Kirby, the character first appeared in Fantastic Four #52 in the Silver Age of Comic Books.' },
];

    
    function populateTable(data) {
        const tbody = $('#characters-table tbody');
        tbody.empty();

        data.forEach(character => {
            const row = $('<tr>');
            row.append($('<td>').text(character.firstName));
            row.append($('<td>').text(character.lastName));
            row.append($('<td>').text(character.info));
            tbody.append(row);
        });
    }

    
    populateTable(charactersData);

    
    $('#search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
    
        $('#characters-table tbody tr').each(function () {
            const firstName = $(this).find('td:first-child').text().toLowerCase();
            const shouldHighlight = searchTerm === '' || firstName.includes(searchTerm);
    
            if (shouldHighlight) {
                $(this).addClass('highlighted');
            } else {
                $(this).removeClass('highlighted');
            }
        });
    });
    

    
    $('#filter-a-m').on('click', function () {
        filterTable('A', 'M');
    });

    $('#filter-n-z').on('click', function () {
        filterTable('N', 'Z');
    });

    
    function filterTable(startLetter, endLetter) {
        $('#characters-table tbody tr').each(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            const isInRange = lastName >= startLetter && lastName <= endLetter;

            if (isInRange) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        updateFilterButtonCounts();
    }

    
    function updateFilterButtonCounts() {
        const countAtoM = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'A' && lastName <= 'M';
        }).length;

        const countNtoZ = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'N' && lastName <= 'Z';
        }).length;

        $('#filter-a-m').text(`A - M (${countAtoM})`);
        $('#filter-n-z').text(`N - Z (${countNtoZ})`);
    }
});
